import * as React from 'react';
import { loadNewsList, showLoadingIndicator } from '../actions/newsList';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State, NewsTitle } from '../types/index';
import { withRouter } from 'react-router-dom';

import NewsTitleFinder from '../components/NewsTitleFinder';
import { NewsSearchSubmit } from '../components/NewsSearchSubmit';

export interface SearchControlsProps {
  history: any;
  newsBoard: string;
  showLoadingIndicator: () => void;
  loadNewsList: () => void;
}

class SearchControls extends React.Component<SearchControlsProps, undefined> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='search-controls'>
        <div className='search-controls-container'>
          <NewsTitleFinder />

          <NewsSearchSubmit
            onClick={() => {
              this.props.showLoadingIndicator();
              this.props.loadNewsList();
              this.props.history.push(`/${this.props.newsBoard}`);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  newsBoard: state.newsBoard
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      loadNewsList,
      showLoadingIndicator
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchControls);
