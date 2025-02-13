import HookTable from '@/components/HookTable';
import PoolTable from '@/components/PoolTable';
import SearchInput from '@/components/SearchInput';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <p>
        Inspect, analyse and debug Uniswap V4 hooks and
        pools.
      </p>
      <div className="flex items-center h-[400px] w-4/5">
        <SearchInput />
      </div>
      <div className="flex flex-row gap-5 mt-12 w-full">
        <PoolTable />
        <HookTable />
      </div>
    </div>
  );
}
