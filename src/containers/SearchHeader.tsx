import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../types';
import { searchResultLimit } from '../constants';
import { LoadingBar } from '../components/loadingBars';

export interface SearchHeaderProps {
  newsTerm: string;
  newsTotal: number;
  loading: boolean;
}

class SearchHeader extends React.Component<SearchHeaderProps, undefined> {
  render() {
    const { newsTerm, newsTotal, loading } = this.props;
    const count = `(${
      newsTotal > searchResultLimit ? `${searchResultLimit}+` : newsTotal
    } News)`;
    let title = 'All news';

    // define title based on term and total number of matches
    

    const loadingBar = loading ? <LoadingBar /> : null;

    return (
      <div className='search-header'>
        <div className='search-header-container'>
          {loadingBar}
          <h1>{title}</h1>

          <span className='count'>{count}</span>
        </div>
        Search {newsTerm}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  newsTerm: state.newsList.term,
  newsTotal: state.newsList.total,
  loading: state.newsList.loading
});

export default connect(mapStateToProps)(SearchHeader);
