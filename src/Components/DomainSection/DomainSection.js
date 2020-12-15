import React from 'react'

import { AppDevelopment, Electronics, Iot, MachineLearning, WebDevelopment, Design, ComputerVision } from '../DomainObjects/DomainObjects'
import SectionHeading from '../SectionHeading/SectionHeading'

import './DomainSection.Styles.scss'

const DomainSection = () => {
    return(
        <section className='domain-section'>
			<SectionHeading heading='Domains' dark center/>
			<div id='marquee' className='domain-container'>
				<div className='marquee-item'>
					<MachineLearning />
					<AppDevelopment />
					<WebDevelopment />
					<Iot />
					<Design />
					<Electronics />
					<ComputerVision />
					<MachineLearning />
					<AppDevelopment />
					<WebDevelopment />
					<Iot />
					<Design />
					<Electronics />
					<ComputerVision />
				</div>
			</div>
		</section>
    )
}

export default DomainSection