import React, { useContext } from 'react'
import { ReleaseContext }  from '../../store/ReleaseContext'
import styled from 'styled-components'
import Thumbnail from '../../components/tumbnail/thumbnail.component'
import Socials from '../../components/socials/socials.component'
import Spotify from '../../components/spotify-embed/spotify-embed.component'
import PageContainer from '../../components/page-container/page-container.component'
const ReleaseContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 5%;
    padding: 0 5%;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr;

`
const ReleaseItem = styled.div`
    width: 100%;
    height: auto;

    border: 1px solid black;
`
const Title = styled.h2``

const Releases = () => {
    const { release } = useContext(ReleaseContext)
    return (
        <PageContainer>
             <ReleaseContainer>
                {release ? release.map((item, id) => 
                <ReleaseItem key={id}>
                    <Thumbnail thumbnail={item.thumbnail} />
                    <Title>{item.artist}</Title>
                    <Title>{item.title}</Title>
                    <Socials socials={item.socials} />
                    <Spotify embed={item.spotifyEmbed} />
                </ReleaseItem>): null}
            </ReleaseContainer>
        </PageContainer>
           
       
        
    )
}

export default Releases
