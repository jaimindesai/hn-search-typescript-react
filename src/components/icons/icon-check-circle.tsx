import * as React from 'react';
import { IconBase } from './icon-base';

export const IconCheckCircle: React.StatelessComponent<IconBase.Props> = (
  props: IconBase.Props
) => (
  <IconBase viewBox='0 0 64 64' {...props}>
    <g>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='square'
        strokeLinejoin='round'
        strokeMiterlimit='3'
        d={`
				M53.251,10.725c5.865,5.867,8.799,12.967,8.799,21.3c0,8.3-2.934,15.399-8.799,21.3c-5.867,5.866-12.951,8.8-21.25,8.8
					c-8.301,0-15.385-2.934-21.251-8.8c-5.867-5.9-8.8-13-8.8-21.3c0-8.333,2.933-15.434,8.8-21.3c5.866-5.9,12.95-8.85,21.251-8.85
					C40.3,1.875,47.384,4.825,53.251,10.725z`}
      />
      <polyline
        fillRule='evenodd'
        clipRule='evenodd'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='square'
        strokeLinejoin='round'
        strokeMiterlimit='3'
        points='13.3,32.726 25.3,44.675 50.7,19.275'
      />
    </g>
  </IconBase>
);

export default IconCheckCircle;
