export default async function PoolPage({
  params,
}: {
  params: Promise<{ poolId: string }>;
}) {
  const poolId = (await params).poolId;

  if (!poolId) {
    return <div>Pool not found</div>;
  }

  return (
    <div>
      Pool <code>{poolId}</code>
    </div>
  );
}
