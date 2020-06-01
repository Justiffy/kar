import { ApiClient } from "./ApiClient";

import { getAllThreads } from './types/endpoints/getAllThreads'

export class HkApi extends ApiClient {
  getAllThreads = this.createRequest<void, getAllThreads>(
    { url: "/b/threads.json", method: "get" },
  )
}