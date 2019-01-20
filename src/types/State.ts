export interface State {
  newsBoard: string;
  newsTitle: NewsTitle;
  newsList: NewsList;
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
  loading: boolean;
  error: string | null;
}
