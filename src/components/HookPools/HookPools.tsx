'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { getChain } from '@/chains';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getPoolsHookedToHook } from '@/services/envio';

interface Props {
  hookAddress: `0x${string}`;
}

const HookPools: React.FC<Props> = ({ hookAddress }) => {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ['poolsHookedToHook', hookAddress],
    queryFn: () => getPoolsHookedToHook(hookAddress),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No pools hooked to this hook</div>;
  }

  return (
    <Table className="w-[800px]">
      <TableCaption>Pools</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            This hook is connected to these pools
          </TableHead>
          <TableHead>Chain</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((pool) => (
          <TableRow
            key={`${pool.poolId}-${pool.chainId}`}
            onClick={() =>
              router.push(`/pool/${pool.poolId}`)
            }
            className="cursor-pointer"
          >
            <TableCell>
              <code>{pool.poolId}</code>
            </TableCell>
            <TableCell>
              <code>
                {getChain(pool.chainId)?.name ||
                  pool.chainId}
              </code>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HookPools;
