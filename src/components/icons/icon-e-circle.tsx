import * as React from 'react';
import { IconBase } from './icon-base';

export const IconECircle: React.StatelessComponent<IconBase.Props> = (
  props: IconBase.Props
) => (
  <IconBase viewBox='0 0 64 64' {...props}>
    <g>
      <circle fill='#EF4548' cx='32' cy='32' r='31.5' />
      <g>
        <path
          opacity='0.07'
          enableBackground='new'
          d={`M60.28,45.664c-3.776,7.811-9.755,13.139-17.934,15.982
					c-2.42,0.85-4.824,1.406-7.209,1.674L20.386,48.57l24.618-29.604l18.08,18.081C62.589,39.943,61.655,42.814,60.28,45.664z`}
        />
        <path
          fill='#FFFFFF'
          d={`M14.322,33.443c0-5.553,1.958-10.317,5.873-14.297c3.979-3.915,8.744-5.873,14.297-5.873
					c0.127,0,0.24,0,0.336,0c0.449,0,0.884,0.016,1.3,0.047l0.578,0.049c2.888,0.385,5.422,1.652,7.606,3.801
                        c2.598,2.631,3.897,5.792,3.897,9.483s-1.299,6.852-3.897,9.482c-2.633,2.631-5.792,3.947-9.484,3.947c-0.225,0-0.433,0-0.625,0
                        v13.574c-5.423-0.064-10.093-2.037-14.007-5.92C16.28,43.793,14.322,39.027,14.322,33.443z`}
        />
      </g>
    </g>
  </IconBase>
);

export default IconECircle;