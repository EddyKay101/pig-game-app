import React from 'react';
import { Icon } from '@iconify/react';
import twotoneMotionPhotosPause from '@iconify/icons-ic/twotone-motion-photos-pause';

export const Hold = (props) => (
    <div>
        <button onClick={props.handleHold} className="btn-hold"><Icon icon={twotoneMotionPhotosPause} className="icon" />Hold</button>
    </div>
);  

