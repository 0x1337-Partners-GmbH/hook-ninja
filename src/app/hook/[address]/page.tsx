import { isAddress } from 'viem';

export default async function HookPage({
  params,
}: {
  params: Promise<{ address: string }>;
}) {
  const address = (await params).address;

  if (!address) {
    return <div>Address not found</div>;
  }

  if (!isAddress(address)) {
    return <div>Invalid hook address</div>;
  }

  return (
    <div>
      Hook <code>{address}</code>
    </div>
  );
}
