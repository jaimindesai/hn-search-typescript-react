export const setNewsTerm = (newsTerm: String) => ({
  type: 'SET_NEWS_TERM',
  newsTerm
});

export const cleanNews = () => ({
  type: 'DELETE_NEWS_TERM'
});
