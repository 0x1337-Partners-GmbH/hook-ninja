import { Graffle } from 'graffle';

const ENVIO_BASE_URL =
  'https://indexer.dev.hyperindex.xyz/d1cbd01/v1/graphql';

const graffle = Graffle.create().transport({
  url: ENVIO_BASE_URL,
});

export const getPoolIdInfo = async (
  poolId: `0x${string}`
) => {
  const data = (await graffle.gql`
    query poolId ($poolId: String!) {
      Pool (where: { id: { _eq: $poolId } }) {
        id
        chainId
        currency0
        currency1
        hooks
    }
  }
`.send({
    poolId,
  })) as {
    Pool: {
      id: string;
      chainId: number;
      currency0: string;
      currency1: string;
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
    currency0: data.Pool[0].currency0,
    currency1: data.Pool[0].currency1,
    hook: data.Pool[0].hooks,
  };
};

export const getPoolsHookedToHook = async (
  hookAddress: `0x${string}`
): Promise<string[]> => {
  const data = (await graffle.gql`
    query poolId ($hookAddress: String!) {
      Pool (where: { hooks: { _eq: $hookAddress } }) {
        id
    }
  }
`.send({
    hookAddress,
  })) as {
    Pool: {
      id: string;
    }[];
  };

  return data.Pool.map((pool) => pool.id);
};
