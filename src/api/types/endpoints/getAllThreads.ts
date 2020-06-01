interface Thread {
  comment: string;
  lasthit: number;
  num: string;
  posts_count: number;
  score: number;
  subject: string;
  timestamp: number;
  views: number;
}

export interface getAllThreads {
  board: string;
  threads: Thread[];
}