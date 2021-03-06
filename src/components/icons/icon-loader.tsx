import * as React from 'react';
import { IconBase } from './icon-base';

export const IconLoader: React.StatelessComponent<IconBase.Props> = (
  props: IconBase.Props
) => (
  <IconBase viewBox='0 0 24 30' {...props}>
    {/* <path
			opacity="0.2"
			fill="#000"
			d={`M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
			s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
			c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z`}
		/>
  		<path
			fill="#fff"
			d={`M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z`}
		>
    		<animateTransform
				attributeType="xml"
				attributeName="transform"
				type="rotate"
				from="0 20 20"
				to="360 20 20"
				dur="0.5s"
				repeatCount="indefinite"
			/>
		</path> */}
    <rect x='0' y='10' width='4' height='10' fill='#fff' opacity='0.2'>
      <animate
        attributeName='opacity'
        attributeType='XML'
        values='0.2; 1; .2'
        begin='0s'
        dur='0.6s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='height'
        attributeType='XML'
        values='10; 20; 10'
        begin='0s'
        dur='0.6s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='y'
        attributeType='XML'
        values='10; 5; 10'
        begin='0s'
        dur='0.6s'
        repeatCount='indefinite'
      />
    </rect>
    <rect x='8' y='10' width='4' height='10' fill='#fff' opacity='0.2'>
      <animate
        attributeName='opacity'
        attributeType='XML'
        values='0.2; 1; .2'
        begin='0.15s'
        dur='0.6s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='height'
        attributeType='XML'
        values='10; 20; 10'
        begin='0.15s'
        dur='0.6s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='y'
        attributeType='XML'
        values='10; 5; 10'
        begin='0.15s'
        dur='0.6s'
        repeatCount='indefinite'
      />
    </rect>
    <rect x='16' y='10' width='4' height='10' fill='#fff' opacity='0.2'>
      <animate
        attributeName='opacity'
        attributeType='XML'
        values='0.2; 1; .2'
        begin='0.3s'
        dur='0.6s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='height'
        attributeType='XML'
        values='10; 20; 10'
        begin='0.3s'
        dur='0.6s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='y'
        attributeType='XML'
        values='10; 5; 10'
        begin='0.3s'
        dur='0.6s'
        repeatCount='indefinite'
      />
    </rect>
  </IconBase>
);

export default IconLoader;
