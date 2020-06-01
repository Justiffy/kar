import { useEffect, useState } from 'react';

import { useApi } from '../../api/useApi';
import { getAllThreads } from 'api/types/endpoints/getAllThreads'

export const useFetchAllThreads = () => {
  const api = useApi();
  const [allThreads, setallThreads] = useState<getAllThreads>();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api?.getAllThreads();
        setallThreads(response)
      } catch (error) {
        console.error(error);
      }
    }

    fetch();
  }, [api])

  return allThreads;
}