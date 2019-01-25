import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import SearchControls from '../containers/SearchControls';
import SearchHeader from '../containers/SearchHeader';

import SearchResult from '../containers/SearchResult';
import { NewsCard } from '../components/NewsCard';
import { NewsInfo } from '../types';

interface DesktopLayoutProps {
  hits: NewsInfo[];
  loading: boolean;
}

const DesktopLayout = (props: DesktopLayoutProps) => {
  const { hits, loading } = props;
  const jobCards = hits.map((hit: NewsInfo) => {
    return <NewsCard key={hit.objectID} news={hit} />;
  });
  return (
    <div>
      <div className='wrapper'>
        <SearchControls />
        <SearchHeader />
      </div>
      <div className='search-result-list' id='search-result-list'>
        <div className='search-result-container'>{jobCards}</div>
      </div>
    </div>
  );
};

export default withRouter(DesktopLayout);
