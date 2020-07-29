import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ArtistContext } from '../../store/ArtistContext'
import Thumbnail from '../../components/tumbnail/thumbnail.component'
import Socials from '../../components/socials/socials.component'
import Spotify from '../../components/spotify-embed/spotify-embed.component'
import PageContainer from '../../components/page-container/page-container.component'
const ReleaseContainer = styled.div`
	width: 100%;
	height: auto;
	display: grid;
	grid-gap: 1em 0.2em;
	padding: 0 5%;
	box-sizing: border-box;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 100px;
	box-sizing: border-box;
`
const ReleaseLink = styled(Link)``
const ReleaseCont = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`
const ReleaseItem = styled.div`
	width: 35vw;
	height: 35vw;
	text-align: left;
`
const Title = styled.h2`
	color: black;
	font-size: 32px;
`
const SocialCont = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Artists = () => {
	const { artists } = useContext(ArtistContext)
	return (
		<PageContainer>
			<ReleaseContainer>
				{artists
					? artists.map((item, id) => (
							<ReleaseCont>
								<ReleaseItem key={id}>
									<ReleaseLink to={`artists/${item.name}`}>
										<Thumbnail thumbnail={item.thumbnail} />
									</ReleaseLink>
									<SocialCont>
										<Title>{item.name}</Title>
										<Socials socials={item.socials} />
									</SocialCont>
								</ReleaseItem>
							</ReleaseCont>
					  ))
					: null}
			</ReleaseContainer>
		</PageContainer>
	)
}

export default Artists
