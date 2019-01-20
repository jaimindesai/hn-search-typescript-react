import * as React from 'react';
import { IconBase } from './icon-base';

export const IconX: React.StatelessComponent<IconBase.Props> = (
  props: IconBase.Props
) => (
  <IconBase viewBox='0 0 64 64' {...props}>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='square'
      strokeLinejoin='round'
      strokeMiterlimit='3'
      d='M2.001,62l29.963-30.035L2.001,2.001 M62.001,62L31.964,31.965L62.001,2.001'
    />
  </IconBase>
);

export default IconX;
