import React from 'react'

// Animations
import 'aos'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// Styles
import './BoardMemberCard.Styles.scss'

const BoardMemberCard = ({member}) => {
    return (
        <div className='board-member-card'>
            <figure className='img-container' data-aos="zoom-in">
                <img src={member.image} alt={member.name} className='img' />
                <figcaption className='links'>
                    <a className='linkedin' href={member.links.linkedIn} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className='instagram' href={member.links.instagram} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className='github' href={member.links.github} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </figcaption>
            </figure>
            <p className='name'>{member.name}</p>
            <p className='post'>{member.post}</p>
        </div>
    )
}

export default BoardMemberCard