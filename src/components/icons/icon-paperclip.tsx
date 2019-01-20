import * as React from 'react';
import { IconBase } from './icon-base';

export const IconPaperclip: React.StatelessComponent<IconBase.Props> = (
  props: IconBase.Props
) => (
  <IconBase viewBox='0 0 64 64' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      strokeLinecap='square'
      strokeMiterlimit='3'
      d={`
            M39.159,47.891L19.542,30.182c-1.712-1.58-2.626-3.533-2.742-5.86c-0.114-2.296,0.61-4.309,2.173-6.035
                c1.562-1.727,3.492-2.647,5.789-2.762c2.078-0.104,3.929,0.474,5.547,1.731c0.145,0.101,0.477,0.387,0.51,0.417
                c0.195,0.177,27.005,24.399,27.069,24.456c2.332,2.109,3.574,4.73,3.73,7.865c0.143,3.15-0.842,5.891-2.949,8.221
                c-2.094,2.311-4.717,3.555-7.865,3.727c-3.135,0.156-5.867-0.818-8.195-2.926c-0.064-0.061-35.796-32.4-35.796-32.4
                c-2.774-2.6-4.249-5.816-4.425-9.648c-0.194-3.911,1.027-7.324,3.667-10.24c2.625-2.898,5.898-4.454,9.822-4.666
                c3.818-0.19,7.157,0.967,10.02,3.468c0.064,0.059,24.188,21.893,24.188,21.893`}
    />
  </IconBase>
);

export default IconPaperclip;
