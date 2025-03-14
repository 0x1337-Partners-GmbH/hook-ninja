'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

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
      {data.hook ? (
        <>
          🪝 Hook:{' '}
          <Link
            className="underline font-mono"
            href={`/hook/${data.hook}`}
          >
            {data.hook}
          </Link>
        </>
      ) : (
        <div>This pool has no hook</div>
      )}
      <pre className="mt-5">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default PoolInfo;
