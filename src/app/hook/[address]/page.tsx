import { isAddress } from 'viem';

import HookDetails from '@/components/HookDetails';
import HookPermissions from '@/components/HookPermissions';
import HookPools from '@/components/HookPools';

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
    <div className="w-full">
      <h2 className="text-xl font-bold mb-3">
        🪝 Hook <code>{address}</code>
      </h2>
      <HookDetails address={address} />
      <div className="flex flex-row gap-5 pt-5">
        <HookPermissions hookAddress={address} />
        <HookPools hookAddress={address} />
      </div>
    </div>
  );

  // TODO: add networks, add link to explorer etc.
  // add "TVL"? Add swap volume?
}
