import * as React from 'react';
import { setNewsTerm, cleanNews } from '../actions/newsTitle';
import { InputField } from './InputField';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { State, NewsTitle } from '../types/index';

export interface NewsTitleFinderProps extends NewsTitle {
  setNewsTerm: (t: string) => void;
  cleanNews: () => void;
}

class NewsTitleFinder extends React.Component<NewsTitleFinderProps, undefined> {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const term = event.target.value;
    this.props.setNewsTerm(term);
  }

  render() {
    return (
      <div className='search-input-container'>
        <InputField
          name={'title'}
          placeholder={'News Title'}
          icon={'search'}
          term={this.props.newsTerm}
          onChange={this.onChange}
          onClean={this.props.cleanNews}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  newsTerm: state.newsTitle.newsTerm
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      setNewsTerm,
      cleanNews
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsTitleFinder);
