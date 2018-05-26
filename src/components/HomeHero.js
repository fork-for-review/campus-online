import React from 'react'
import styled from 'styled-components'
import {colors, fonts} from '../constants'
import {above} from '../utils/responsive'
import Link from './StylableLink'
import Navbar from './Navbar'
import Container from './Container'

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	position: relative;
	background: ${colors.base};
	color: white;
	position: relative;
	overflow: hidden;
	z-index: 3;
	margin-bottom: 8rem;
	min-height: 24rem;
	${above.md`
		min-height: 32rem;
	`};
`

const PostContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1;
`

const ImageWrapper = styled.figure`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	align-items: center;
	justify-content: center;
	object-fit: cover;
`

const Image = styled.img`
	display: block;
	overflow: hidden;
	object-fit: cover;
	height: 100%;
	min-width: 100%;
	flex: 1;
`

const Text = styled.div`
	display: block;
	margin-top: auto;
	padding-top: 6rem;
	padding-bottom: 3rem;
	position: relative;
	background: linear-gradient(
		180deg,
		rgba(20, 22, 24, 0) 0%,
		rgba(20, 22, 24, 0.88) 100%
	);
	background-blend-mode: multiply;
`

const Meta = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-transform: uppercase;
	font-size: 11px;
	line-height: 1.25rem;
	font-weight: 600;
	letter-spacing: 0.5px;
	margin-bottom: 0.5rem;
	${above.md`
		font-size: 0.75rem;
	`};
`

const Editorial = styled.div`
	display: block;
	margin-right: 0.5rem;
`

const PostDate = styled.div`
	opacity: 0.66;
`

const Title = styled.div`
	font-size: 1.5rem;
	line-height: 2.25rem;
	font-weight: 500;
	letter-spacing: 0.015em;
	word-wrap: break-word;
	${above.md`
		font-size: 2rem;
		line-height: 2.5rem;
	`};
`

const Anchor = styled(Link)`
	display: block;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`

const HomeHero = ({url, title, date, editorial, cover, author}) => (
	<Wrapper>
		<div
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				clip: 'rect(auto,auto,auto,auto)',
				clipPath: 'inset(0)',
				zIndex: 4,
				pointerEvents: 'none',
			}}
		>
			<Navbar
				hero={true}
				links={[
					{href: '/about', label: 'Sobre'},
					{href: '/contact', label: 'Contato'},
				]}
			/>
		</div>
		<PostContent>
			{cover && (
				<ImageWrapper>
					<Image src={cover} />
				</ImageWrapper>
			)}
			<Text>
				<Container>
					<Meta>
						{editorial && <Editorial>{editorial}</Editorial>}
						{date && (
							<PostDate>{`${new Date(date).toLocaleDateString('pt-BR', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							})}`}</PostDate>
						)}
						{/* {author && <div style={{marginLeft:'auto', opacity: 0.66}}>{author}</div>} */}
					</Meta>
					{title && <Title>{title}</Title>}
				</Container>
			</Text>
		</PostContent>
		{url && <Anchor to={url} />}
	</Wrapper>
)

export default HomeHero
