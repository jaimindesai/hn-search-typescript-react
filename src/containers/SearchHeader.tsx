import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../types';
import { searchResultLimit } from '../constants';
import { LoadingBar } from '../components/loadingBars';

export interface SearchHeaderProps {
  newsTerm: string;
  loading: boolean;
}

class SearchHeader extends React.Component<SearchHeaderProps, undefined> {
  render() {
    const { newsTerm, loading } = this.props;

    const loadingBar = loading ? <LoadingBar /> : null;

    return (
      <div className='search-header'>
        <div className='search-header-container'>{loadingBar}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  newsTerm: state.newsList.term,
  loading: state.newsList.loading
});

export default connect(mapStateToProps)(SearchHeader);
