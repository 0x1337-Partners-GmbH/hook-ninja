import Link from 'next/link';

import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center ">
      <div>
        <p>
          Inspect, analyse and debug Uniswap V4 hooks and
          pools.
        </p>
        <SearchInput />
        <h3 className="text-lg font-bold">Pools</h3>
        <p>
          <Link
            className="text-blue-500 hover:underline"
            href="/pool/0x7af84d60777413f90cc511a83cf702b128bc885f84d6ca8be4b60063328d907a"
          >
            <code>
              0x7af84d60777413f90cc511a83cf702b128bc885f84d6ca8be4b60063328d907a
            </code>
          </Link>
        </p>
        <h3 className="text-lg font-bold mt-3">Hooks</h3>
        <p>
          <Link
            className="text-blue-500 hover:underline"
            href="/hook/0x0010d0D5dB05933Fa0D9F7038D365E1541a41888"
          >
            <code>
              0x0010d0D5dB05933Fa0D9F7038D365E1541a41888
            </code>
          </Link>
        </p>
      </div>
    </div>
  );
}
