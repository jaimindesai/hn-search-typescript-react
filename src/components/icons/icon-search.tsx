import * as React from 'react';
import { IconBase } from './icon-base';

export const IconSearch: React.StatelessComponent<IconBase.Props> = (
  props: IconBase.Props
) => (
  <IconBase viewBox='0 0 64 64' {...props}>
    <path
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='square'
      strokeLinejoin='round'
      d='M60.5,61.586L40.792,41.828c-4.177,3.705-9.129,5.561-14.856,5.561c-6.198,0-11.487-2.189-15.867-6.57 C5.688,36.404,3.5,31.099,3.5,24.9c0-6.232,2.188-11.538,6.569-15.917c4.38-4.38,9.669-6.569,15.867-6.569 c6.199,0,11.49,2.189,15.867,6.569c4.38,4.38,6.569,9.686,6.569,15.917c0,6.198-2.189,11.504-6.569,15.918 c-0.336,0.338-0.673,0.672-1.011,1.01'
    />
  </IconBase>
);

export default IconSearch;
