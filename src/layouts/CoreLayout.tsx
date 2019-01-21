import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import DesktopLayout from './DesktopLayout';
import { loadNewsList, showLoadingIndicator } from '../actions/newsList';

import { State, NewsInfo } from '../types';

import './../styles/index.scss';

export interface CoreLayoutProps {
  hits: NewsInfo[];
  loading: boolean;
  loadNewsList: () => void;
  showLoadingIndicator: () => void;
}

class CoreLayout extends React.Component<CoreLayoutProps, undefined> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showLoadingIndicator();
    this.props.loadNewsList();
  }

  render() {
    return (
      <DesktopLayout hits={this.props.hits} loading={this.props.loading} />
    );
  }
}

const mapStateToProps = (state: State) => ({
  hits: state.newsList.hits,
  loading: state.newsList.loading
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
)(CoreLayout);
