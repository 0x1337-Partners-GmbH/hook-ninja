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

// Load this in a less naive way, from the data folder or elsewhere
const hooks = [
  {
    name: 'Flaunch',
    address: '0x51Bba15255406Cfe7099a42183302640ba7dAFDC',
  },
  {
    name: 'Bunni',
    address: '0x0010d0D5dB05933Fa0D9F7038D365E1541a41888',
  },
];

const HookTable: React.FC = () => {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>Hooks</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {hooks.map((hook) => (
          <TableRow
            className="cursor-pointer"
            key={hook.address}
            onClick={() =>
              router.push(`/hook/${hook.address}`)
            }
          >
            <TableCell className="font-medium">
              {hook.name}
            </TableCell>
            <TableCell>
              <code>{hook.address}</code>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HookTable;
