import { Graffle } from 'graffle';
import { getAddress } from 'viem';

const ENVIO_BASE_URL =
  'https://enviodev-69b6884.dedicated.hyperindex.xyz/v1/graphql';

const graffle = Graffle.create().transport({
  url: ENVIO_BASE_URL,
});

export const getPoolIdInfo = async (
  poolId: `0x${string}`
) => {
  const data = (await graffle.gql`
    query poolId ($poolId: String!) {
      Pool (where: { id: { _ilike: $poolId } }) {
        id
        chainId
        token0
        token1
        hooks
    }
  }
`.send({
    poolId: `%${poolId}`,
  })) as {
    Pool: {
      id: string;
      chainId: number;
      token0: string;
      token1: string;
      hooks: string;
    }[];
  };

  // for the same poolId, we will have the same information, only the chainId will be different

  if (data.Pool.length === 0) {
    return null;
  }

  const allChainIds = data.Pool.reduce((acc, curr) => {
    acc.push(Number(curr.chainId));
    return acc;
  }, [] as number[]);

  return {
    poolId: data.Pool[0].id,
    chainIds: allChainIds,
    token0: data.Pool[0].token0.split('_')[1],
    token1: data.Pool[0].token1.split('_')[1],
    hook: data.Pool[0].hooks,
  };
};

export const getPoolsHookedToHook = async (
  hookAddress: `0x${string}`
): Promise<{ poolId: string; chainId: number }[]> => {
  const data = (await graffle.gql`
    query poolId ($hookAddress: String!) {
      Pool (where: { hooks: { _eq: $hookAddress } }) {
        id
    }
  }
`.send({
    // the graphql db is case sensitive
    hookAddress: getAddress(hookAddress),
  })) as {
    Pool: {
      id: string;
    }[];
  };

  return data.Pool.map((pool) => ({
    poolId: pool.id.split('_')[1],
    chainId: Number(pool.id.split('_')[0]),
  })).sort((a, b) => {
    if (a.chainId === b.chainId) {
      return a.poolId.localeCompare(b.poolId);
    }
    return a.chainId - b.chainId;
  });
};
