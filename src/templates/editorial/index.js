import React from 'react'
import MetaTags from '../../components/MetaTags'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'

export const Editorial = ({name, color, bodyText}) => (
	<React.Fragment>
		<Hero title={name} background={color} navbar={false} bodyText={bodyText} />
		<Navbar
			background={color}
			dark={true}
			style={{position: 'fixed', top: 0, zIndex: 30}}
		/>
		<Container>
			<MetaTags title={name} />
			<section style={{padding: '6rem 0 8rem'}}>
				<div>[TODO]: MAP Articles HERE</div>
			</section>
		</Container>
	</React.Fragment>
)

export default Editorial
