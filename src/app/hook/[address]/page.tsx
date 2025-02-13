export default async function PoolPage({
  params,
}: {
  params: Promise<{ address: string }>;
}) {
  const address = (await params).address;

  if (!address) {
    return <div>Address not found</div>;
  }

  return (
    <div>
      Hook <code>{address}</code>
    </div>
  );
}
