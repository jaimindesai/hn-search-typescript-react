import * as React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NewsCard } from '../components/NewsCard';
import { State, NewsList, NewsInfo } from '../types';

export interface SearchResultProps extends NewsList {
  newsBoard: string;
  hits: NewsInfo[];
}

class SearchResult extends React.Component<SearchResultProps, undefined> {
  constructor(props) {
    super(props);
  }

  render() {
    const newsCards = this.props.hits.map((hit: NewsInfo) => {
      return <NewsCard key={hit.objectID} news={hit} />;
    });

    return (
      <div className='search-result-list' id='search-result-list'>
        <div className='search-result-container'>{newsCards}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  newsBoard: state.newsBoard,
  hits: state.newsList.hits
});

export default withRouter(connect(mapStateToProps)(SearchResult));
