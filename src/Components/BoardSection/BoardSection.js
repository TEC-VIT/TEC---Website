import React from 'react'

import BoardMemberCard from '../BoardMemberCard/BoardMemberCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import { Circle } from '../BackgroundObjects/BackgroungObjects'

import './BoardSection.Styles.scss'

const BoardSection = ({boardMembers}) => {
    return (
        <section className='board-section'>
            <SectionHeading heading='Board of 2020-21' center />
            <div className='board-list'>
            <div className='circle'>
                <Circle />
            </div>
            {
                boardMembers.map(member => <BoardMemberCard key={member.id} member={member} />)
            }
            </div>
        </section>
    )
}

export default BoardSection