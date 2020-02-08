import { useState } from 'react';

export const useTabs = () => {
  const [active, setactive] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setactive(i);
    }
  };

  const getTabProps = (i: number) => ({
    active: i === active,
    onClick: () => setactive(i),
    onKeyDown: (e: React.KeyboardEvent) => handleKeyDown(e, i),
  });

  const getTabListProps = () => ({
    active,
  });
  const selectTab = (i: number) => setactive(i);

  return {
    getTabListProps,
    getTabProps,
    active,
    selectTab,
  };
};
