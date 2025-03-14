import { isHex } from 'viem';

import PoolInfo from '@/components/PoolInfo/PoolInfo';

export default async function PoolPage({
  params,
}: {
  params: Promise<{ poolId: string }>;
}) {
  const poolId = (await params).poolId;

  if (!poolId) {
    return <div>Pool not found</div>;
  }

  if (!isHex(poolId) || poolId.length !== 66) {
    return (
      <div>
        Invalid pool ID. Pool ID must be a 32 byte hex
        string.
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-3">
        Pool <code>{poolId}</code>
      </h2>
      <PoolInfo poolId={poolId} />
    </div>
  );
}
