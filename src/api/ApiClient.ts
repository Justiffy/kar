import { AxiosInstance, AxiosRequestConfig } from "axios";

import { createAxiosInstance } from "./utils/createAxiosInstance";

export interface ApiClientConfig {
  url: string;
}

export class ApiClient {
  protected axiosInstance: AxiosInstance;

  constructor(config: ApiClientConfig) {
    this.axiosInstance = createAxiosInstance(config);
  }

  protected createRequest<ReqT, RespT>(
    requestConfig: Required<Pick<AxiosRequestConfig, "method" | "url">>,
  ) {
    return (requestData: ReqT) => {
      const requestPromise = this.axiosInstance.request({ ...requestConfig, params: requestData });

      return requestPromise.then(
        (response): RespT => {
          return response.data;
        },
      );
    };
  }
}