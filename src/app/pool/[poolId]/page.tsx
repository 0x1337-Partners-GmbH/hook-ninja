import { isHex } from 'viem';

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
    <div>
      Pool <code>{poolId}</code>
    </div>
  );
}
