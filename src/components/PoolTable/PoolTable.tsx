'use client';

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

const pools = [
  {
    id: '0x7af84d60777413f90cc511a83cf702b128bc885f84d6ca8be4b60063328d907a',
  },
  {
    id: '0xf8f4afa64c443ff00630d089205140814c9c0ce79ff293d05913a161fcc7ec4a',
  },
];

const PoolTable: React.FC = () => {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>Pools</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Pool ID</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pools.map((pool) => (
          <TableRow
            className="cursor-pointer"
            key={pool.id}
            onClick={() => router.push(`/pool/${pool.id}`)}
          >
            <TableCell>
              <code>
                {pool.id.slice(0, 12)}...
                {pool.id.slice(-10)}
              </code>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PoolTable;
