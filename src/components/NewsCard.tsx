import * as React from 'react';
import { NewsInfo } from '../types';

export interface JobCardProps {
  news: NewsInfo;
}

export const NewsCard = (props: JobCardProps) => {
  const { title, author, created_at } = props.news;

  return (
    <div className='card'>
      <div className='card-header'>
        <h2>{title}</h2>
        <span className='date'>
          <span className='date-title'>{created_at}</span>
        </span>
      </div>
      <ul className='card-footer'>
        <li>
          <span className='label'>Author </span>
          <span>{author}</span>
        </li>
      </ul>
    </div>
  );
};
