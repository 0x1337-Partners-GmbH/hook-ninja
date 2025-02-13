'use client';

import { decodeHookPermissions } from '@/lib/uniswap';

interface Props {
  hookAddress: `0x${string}`;
}

// https://github.com/Uniswap/v4-core/blob/main/src/libraries/Hooks.sol#L26

const HookPermissions: React.FC<Props> = ({
  hookAddress,
}) => {
  const permissions = decodeHookPermissions(hookAddress);

  return (
    <div>
      <h3 className="text-lg font-bold mb-3">
        🔐 Permissions
      </h3>
      <pre>{JSON.stringify(permissions, null, 2)}</pre>
    </div>
  );
};

export default HookPermissions;
