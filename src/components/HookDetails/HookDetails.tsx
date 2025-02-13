'use client';

import { useEffect, useState } from 'react';

import { HookData } from '@/app/interfaces/hookData';

interface Props {
  address: string;
}

const HookDetails: React.FC<Props> = ({ address }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hookData, setHookData] = useState<HookData | null>(
    null
  );

  const fetchHookData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `/data/hooks/${address}.json`
      );
      const data = await res.json();
      setHookData(data as HookData);
    } catch {
      // skip - suggest to contribute
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHookData();
  }, [address]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!hookData) {
    return (
      <p>
        Contribute to the database by adding{' '}
        <a href="https://github.com/0x1337-Partners-GmbH/hook-ninja/tree/main/public/data">
          details for this hook
        </a>
        .
      </p>
    );
  }

  return (
    <div>
      <h2>{hookData.name}</h2>
      <p>{hookData.description}</p>
      <a
        href={hookData.website}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {hookData.website}
      </a>
    </div>
  );
};

export default HookDetails;
