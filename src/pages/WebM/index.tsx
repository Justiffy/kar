import React from 'react';

import { useFetchAllThreads } from './hooks';

export const Board: React.FC = () => {
  const allThreads = useFetchAllThreads();

  return (
    <div>Board</div>
  )
}