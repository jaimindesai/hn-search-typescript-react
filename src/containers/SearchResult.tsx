import * as React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { NewsCard } from '../components/NewsCard';
import { State, NewsList, NewsInfo } from '../types';

export interface SearchResultProps extends NewsList {
  newsBoard: string;
  hits: NewsInfo[];
  selectedJobID: string;
  scrollToSelectedFlag: boolean;
}

class SearchResult extends React.Component<SearchResultProps, undefined> {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.scrollToSelectedFlag) {
      const el: HTMLElement | null = document.getElementById(
        this.props.selectedJobID
      );
      const list: HTMLElement | null = document.getElementById(
        'search-result-list'
      );
      if (el !== null && list !== null) {
        const pos = el.offsetTop - list.scrollTop;
        if (pos < 0 || pos > list.offsetHeight) {
          list.scrollTop = el.offsetTop - list.offsetTop;
        }
      }
    }
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
