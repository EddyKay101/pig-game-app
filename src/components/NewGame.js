import React from 'react';
import { Icon } from '@iconify/react';
import iosPlusOutline from '@iconify/icons-ion/ios-plus-outline';

export const NewGame = (props) => (
    <div>
        <button onClick={props.handleInit} className="btn-new"><Icon icon={iosPlusOutline} className="icon" />New game</button>
    </div>
);  

