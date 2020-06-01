import axios from "axios";

import { ApiClientConfig } from "../ApiClient";

export const createAxiosInstance = (config: ApiClientConfig) => {
  return axios.create({
    baseURL: 'https://proxy.x7.workers.dev/' + config.url,
  });
};
