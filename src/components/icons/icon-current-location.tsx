import * as React from 'react';
import { IconBase } from './icon-base';

export const IconCurrentLocation: React.StatelessComponent<IconBase.Props> = (
  props: IconBase.Props
) => (
  <IconBase viewBox='0 0 64 64' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      transform='rotate(45 45 40)'
      fill='currentColor'
      d={`M32,8.351l20.829,49.36l-19.657-8.346L32,48.868l-1.172,0.497L11.17,57.711L32,8.351 M32,0.634
			L5.528,63.365L32,52.127l26.472,11.238L32,0.634L32,0.634z`}
    />
  </IconBase>
);

export default IconCurrentLocation;
