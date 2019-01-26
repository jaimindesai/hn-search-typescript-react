export interface State {
  newsBoard: string;
  newsTitle: NewsTitle;
  newsList: NewsList;
}

export interface SearchResponse {
  hits: NewsInfo[];
  total: number;
}

export interface NewsTitle {
  newsTerm: string;
}

export interface NewsInfo {
  created_at: string;
  objectID: string;
  title: string;
  author: string;
  points: string;
}

export interface NewsList {
  term: string;
  hits: NewsInfo[];
  total: number;
  loading: boolean;
  error: string | null;
}
