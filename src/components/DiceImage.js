import React from 'react';
import one from '../../public/images/dice-1.png';
import two from '../../public/images/dice-2.png';
import three from '../../public/images/dice-3.png';
import four from '../../public/images/dice-4.png';
import five from '../../public/images/dice-5.png';
import six from '../../public/images/dice-6.png';

const DiceImage = (props) => {
    if (props.dice === 1) {
        return (
            <div>
                <img className="dice" src={one} alt="1" />
            </div>
        )
    }
    else if (props.dice === 2) {
        return (
            <div>
                <img className="dice" src={two} alt="2" />
            </div>
        )
    }
    else if (props.dice === 3) {
        return (
            <div>
                <img className="dice" src={three} alt="3" />
            </div>
        )
    }
    else if (props.dice === 4) {
        return (
            <div>
                <img className="dice" src={four} alt="4" />
            </div>
        )
    }
    else if (props.dice === 5) {
        return (
            <div>
                <img className="dice" src={five} alt="5" />
            </div>
        )
    }
    else if (props.dice === 6) {
        return (
            <div>
                <img className="dice" src={six} alt="6" />
            </div>
        )
    }
    return (
        <div>

        </div>
    )
};

export default DiceImage;

