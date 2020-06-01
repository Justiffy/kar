import { createContext, useContext } from 'react'

import { HkApi } from './hkApi';

export const ApiContext = createContext<HkApi | null>(null);

export const useApi = () => {
  const api = useContext(ApiContext);

  return api;
}