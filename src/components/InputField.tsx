import * as React from 'react';

import { IconX, IconSearch } from './icons/index';

export namespace InputFields {
  export interface Props {
    term: string;
    name: string;
    placeholder: string;
    icon: string;
    onChange: React.ReactEventHandler<HTMLElement>;
    onClean: () => void;
  }
}

export class InputField extends React.Component<InputFields.Props> {
  input: HTMLInputElement;

  componentDidMount() {
    this.input.value = this.props.term;
  }

  renderCleanIcon() {
    if (this.props.term) {
      return (
        <span
          className='search-input-clear'
          onClick={() => {
            this.props.onClean();
            this.input.focus();
          }}
        >
          <IconX size={16} color={'#8f8f8f'} />
        </span>
      );
    }
  }

  renderIcon() {
    if (this.props.icon === 'search') {
      return (
        <span className='search-icon'>
          <IconSearch size={16} color={'#ccc'} />
        </span>
      );
    }
  }

  render() {
    const icon = this.renderIcon();
    const cleanIcon = this.renderCleanIcon();
    return (
      <div>
        <input
          className='search-input'
          type='text'
          name={this.props.name}
          placeholder={this.props.placeholder}
          ref={(input: any) => {
            this.input = input;
          }}
          value={this.props.term}
          onChange={this.props.onChange}
        />
        {icon}
        {cleanIcon}
      </div>
    );
  }
}
