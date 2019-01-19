import * as React from 'react';

interface IProps {
  compiler: string;
  bundler: string;
}

export default class Hello extends React.Component<IProps, {}> {
  render() {
    return (
      <h1>
        This is a React application using {this.props.compiler}
        with {this.props.bundler}
      </h1>
    );
  }
}
