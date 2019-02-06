import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import SearchControls from '../containers/SearchControls';
import SearchHeader from '../containers/SearchHeader';

import SearchResult from '../containers/SearchResult';

import { NewsInfo } from '../types';

interface DesktopLayoutProps {
  hits: NewsInfo[];
  loading: boolean;
}

const DesktopLayout = (props: DesktopLayoutProps) => {
  return (
    <div className='wrapper'>
      <SearchControls />
      <SearchHeader />

      <Route component={SearchResult} />
    </div>
  );
};

export default withRouter(DesktopLayout);
