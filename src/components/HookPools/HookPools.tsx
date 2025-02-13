'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

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
          <TableHead>Pools ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((pool) => (
          <TableRow
            key={pool}
            onClick={() => router.push(`/pool/${pool}`)}
            className="cursor-pointer"
          >
            <TableCell>
              <code>{pool}</code>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HookPools;
