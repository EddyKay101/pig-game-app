import React from 'react';
import { Icon } from '@iconify/react';
import loop2Icon from '@iconify/icons-icomoon-free/loop2';

export const RollDice = (props) => (
    
    <div>
        <button onClick={props.handleRollDice} className="btn-roll"><Icon icon={loop2Icon} className="icon" />Roll Dice</button>
    </div>
);  

