import React from 'react';

import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'

// Styles
import './AboutUsWorkCard.Styles.scss'

const AboutUsWorkCard = ({label, number}) => {
    return(
        <CountUp start={0} end={number} duration={2} redraw preserveValue>
        { ({countUpRef, start}) =>
            <VisibilitySensor onChange={start} delayedCall>
                <div className='work'>
                    <span className='num' ref={countUpRef} /><span className='num-plus' >+</span>
                    <p>{label}</p>
                </div>
            </VisibilitySensor>
        }
        </CountUp>
    );
}

export default AboutUsWorkCard;