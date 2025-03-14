import HookTable from '@/components/HookTable';
import PoolTable from '@/components/PoolTable';
import SearchInput from '@/components/SearchInput';
import { Button } from '@/components/ui/button';
import { GITHUB_HOOKS_CONTRIBUTE_URL } from '@/constants';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <p>
        Inspect, analyse and debug Uniswap V4 hooks and
        pools.
      </p>
      <a href={GITHUB_HOOKS_CONTRIBUTE_URL}>
        <Button
          size="lg"
          className="mt-4 bg-[#FC72FF] text-xl"
        >
          👉 Add your hook 👈
        </Button>
      </a>
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
