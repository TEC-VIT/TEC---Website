import React from 'react'

import './SectionHeading.Styles.scss'

const SectionHeading = ({heading, center, dark}) => {
    return (
        <div className='section-heading'>
            <hr color= {dark ? 'white' : 'black'} size='2' />
            <h1 className={`${center ? 'center' : 'left'} ${dark ? 'dark' : 'light'}`}>{heading}</h1>
        </div>
    )
}

export default SectionHeading