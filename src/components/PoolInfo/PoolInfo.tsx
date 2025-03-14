'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import { getChain } from '@/chains';
import { getPoolIdInfo } from '@/services/envio';

interface Props {
  poolId: `0x${string}`;
}

const PoolInfo: React.FC<Props> = ({ poolId }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['poolInfo', poolId],
    queryFn: () => getPoolIdInfo(poolId),
    refetchOnWindowFocus: false,
    // refetch every 2 days
    // the only information that can change is the list of chains, if it is deployed to another chain, data will have to be update, it is not very likely but still
    staleTime: 1000 * 60 * 60 * 24 * 2,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Pool not found</div>;
  }

  return (
    <div>
      {data.hook ===
      '0x0000000000000000000000000000000000000000' ? (
        <div>This pool has no hook</div>
      ) : (
        <>
          🪝 Hook:{' '}
          <Link
            className="underline font-mono"
            href={`/hook/${data.hook}`}
          >
            {data.hook}
          </Link>
        </>
      )}

      <div>
        This pool is available on the following chains:
        <ul>
          {data.chainIds.map((chainId) => {
            const chain = getChain(chainId);

            if (!chain) {
              return null;
            }

            return (
              <li key={chainId}>
                {chain?.name} -{' '}
                <a
                  href={`https://geckoterminal.com/${chain?.geckoTerminalSlug}/pools/${poolId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset">
                    View on GeckoTerminal
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        Token0: <code>{data.token0}</code>
      </div>
      <div>
        Token1: <code>{data.token1}</code>
      </div>
    </div>
  );
};

export default PoolInfo;
