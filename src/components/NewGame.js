import React from 'react';
import { Icon } from '@iconify/react';
import iosPlusOutline from '@iconify/icons-ion/ios-plus-outline';

export const NewGame = (props) => (
    <div>
        <button className="btn-new"><Icon icon={iosPlusOutline} className="icon" />New game</button>
    </div>
);  

