'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { checksumAddress, isAddress, isHex } from 'viem';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchInput: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const handleSearch = () => {
    // TODO: handle cases without 0x prefix
    setError('');

    if (search.length === 0 && search == '') {
      return;
    }

    if (isAddress(search)) {
      router.push(`/hook/${checksumAddress(search)}`);
      return;
    }

    if (isHex(search) && search.length === 66) {
      router.push(`/pool/${search}`);
      return;
    }

    setError('Invalid input');
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <div className="flex flex-col w-full items-center space-x-2">
      <Input
        className="font-mono"
        type="text"
        value={search}
        placeholder="Pool ID / Hook Address"
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <Button className="mt-4" type="submit">
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
