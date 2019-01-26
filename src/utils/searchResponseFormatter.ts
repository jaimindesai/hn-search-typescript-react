import { SearchResponse } from '../types/searchResponse';

export function formatSearchResponse(hits: any): SearchResponse {
  if (hits.nbHits > 0) {
    console.log('Inside nbhits');
    return {
      hits: hits.map(hit => ({
        created_at: hit.created_at,
        objectID: hits.objectID,
        title: hit.title,
        author: hit.author,
        points: hit.points
      })),
      total: hits.nbHits
    };
  }
  return {
    hits: [],
    total: 0
  };
}
