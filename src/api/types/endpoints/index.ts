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

export interface file {
  displayname: string;
  duration_secs?: number;
  duration?: string;
  fullname: string;
  height: number;
  md5: string;
  name: string;
  nsfw: string;
  path: string;
  size: number;
  thumbnail: string;
  tn_height: number;
  tn_width: number;
  type: number;
  width: number;
}

export interface post {
  files: file[];
}