export interface SearchResponse {
  hits: NewsInfo[];
  total: number;
}

export interface NewsInfo {
  created_at: string;
  objectID: string;
  title: string;
  author: string;
  points: string;
}
