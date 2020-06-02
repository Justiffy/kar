import { ApiClient } from "./ApiClient";

import { getAllThreads, post } from './types/endpoints'

export class HkApi extends ApiClient {
  getAllThreads = this.createRequest<void, getAllThreads>(
    { url: "/b/threads.json", method: "get" },
  )

  getAllPostsByThread = (thread: string) => this.createRequest<void, post[]>(
    { url: `/makaba/mobile.fcgi?task=get_thread&board=b&thread=${thread}&post=0`, method: "get"}
  )();
}