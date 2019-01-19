import * as React from 'react';

export interface NewsSearchProps {
  onClick: () => void;
}

export const NewsSearchSubmit = (props: NewsSearchProps) => {
  return (
    <div className='search-submit-container'>
      <input
        className='search-submit'
        value='Find Jobs'
        type='button'
        onClick={props.onClick}
      />
    </div>
  );
};
