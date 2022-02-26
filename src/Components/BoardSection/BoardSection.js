import React, { Component } from 'react'

// Sections
import BoardMemberCard from '../BoardMemberCard/BoardMemberCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import { Circle } from '../BackgroundObjects/BackgroungObjects'

// Data
import BoardMembers from '../../Assets/Data/BoardMembers'

// Styles
import './BoardSection.Styles.scss'

class BoardSection extends Component {
    constructor(){
        super()
        this.state = {
            boardMembers: BoardMembers
        }
    }

    render(){
        return (
            <section className='board-section'>
                <SectionHeading heading='Board of 2021-22' center />
                <div className='board-list'>
                <div className='circle'>
                    <Circle />
                </div>
                {
                    this.state.boardMembers.map(member => <BoardMemberCard key={member.id} member={member} />)
                }
                </div>
            </section>
        )
    }
}

export default BoardSection