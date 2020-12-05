import React from 'react'

import userImg from '../../Assets/userimg.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

import './BoardMemberCard.Styles.scss'

const BoardMemberCard = ({member}) => {
    return (
        <div className='board-member-card'>
            <figure className='img-container'>
                <img src={userImg} alt={member.name} className='img' />
                <figcaption className='links'>
                    <a className='linkedin' href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className='instagram' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className='email' href='mailto:yashjustyash@outlook.com' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faAt} />
                    </a>
                </figcaption>
            </figure>
            <p className='name'>{member.username}</p>
            <p className='post'>{member.name}</p>
        </div>
    )
}

export default BoardMemberCard