'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
    <div className="mt-4">
      <Table>
        <TableCaption>🔐 Permissions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              Permission
            </TableHead>
            <TableHead className="text-right">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(permissions).map(
            ([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium">
                  {key}
                </TableCell>
                <TableCell className="text-right">
                  {value ? '✅' : '❌'}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default HookPermissions;
