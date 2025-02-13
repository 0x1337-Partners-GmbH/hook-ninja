import { isAddress } from 'viem';

import HookPermissions from '@/components/HookPermissions';

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
      <h2 className="text-xl font-bold mb-3">
        Hook <code>{address}</code>
      </h2>

      <HookPermissions hookAddress={address} />
    </div>
  );
}
