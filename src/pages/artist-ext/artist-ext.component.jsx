import React, {useContext} from 'react'
import { ArtistContext }  from '../../store/ArtistContext'
import styled from 'styled-components'
import Socials from '../../components/socials/socials.component'
import PageContainer from '../../components/page-container/page-container.component'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ArtistCont = styled.div`
    width: 100%;
    height: auto;
    padding-right: 5%;
    box-sizing: border-box;
  
`
const Banner = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`
const ReleaseCont = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    
`
const VideoCont = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    
`
const Title = styled.h1`
    color: white;
    font-size: 72px;
`
const ReleaseText = styled.h2`
    text-align: left;
    font-size: 32px;
    color: black`
const ReleaseItem = styled.iframe`
    width: 100%;
    height: 250px;
    position: relative;
    z-index: 99;
`

const VideoItem = styled.iframe`
width: 100%;
height: 550px;
position: relative;
z-index: 99;
`
const ArticleCont = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flext-start;
`
const Article = styled.a`
    text-align: left;
    

`
const ArticleText = styled.h3`
`

const ArtistExt = (props) => {
    const { artists } = useContext(ArtistContext)
    const artist = artists.find(el => el.name === `${props.match.params.artistId}`)
    console.log(artist)
    return (
        <PageContainer>
            <ArtistCont>
                    {artist ? (
                        <>
                            <Banner style={{backgroundImage: `url(${urlFor(artist.banner).url()})`}}>
                                <Title>
                                    {artist.name}
                                </Title>
                            </Banner>
                            <ReleaseCont>
                                <ReleaseText>Releases</ReleaseText>
                               <ReleaseItem src={`https://open.spotify.com/embed/artist/${artist.releases[0].spotifyURI}` } frameborder="0" allowtransparency="true" allow="encrypted-media"/>
                                
                               {artist.videos ? 
                               <VideoCont>
                                <ReleaseText>Videos</ReleaseText>
                                {artist.videos.map((item, id) => <VideoItem key={id} src={item.youtubeLink}></VideoItem>) }
                               </VideoCont>
                                : null}
                                {artist.articles ? 
                                <ArticleCont>
                                    <ReleaseText>Links</ReleaseText>
                                    {artist.articles.map((item, id) => <Article key={id} href={item.link}><ArticleText>{item.title}</ArticleText></Article>)}
                                </ArticleCont>: null}
                            </ReleaseCont>
                        </>
                    ) : null}
            </ArtistCont>
        </PageContainer>
     
    )
}

export default ArtistExt
