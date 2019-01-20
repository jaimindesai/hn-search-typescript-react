import * as React from 'react';

export namespace IconBase {
  export interface Props extends React.SVGAttributes<SVGElement> {
    size?: string | number;
  }
}

export class IconBase extends React.Component<IconBase.Props, {}> {
  constructor(props: IconBase.Props) {
    super(props);
  }

  render() {
    const {
      className,
      children,
      color,
      style,
      viewBox,
      ...otherProps
    } = this.props;

    const computedSize = !!this.props.size ? `${this.props.size}px` : '1em';
    const svgStyle = {
      width: computedSize,
      height: computedSize,
      color,
      style
    } as React.CSSProperties;

    return (
      <svg
        className={className}
        fill='currentColor'
        preserveAspectRatio='xMidYMid meet'
        viewBox={viewBox}
        {...otherProps}
        role='img'
        style={svgStyle}
      >
        {children}
      </svg>
    );
  }
}

export default IconBase;
