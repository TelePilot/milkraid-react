import React from 'react'
import styled from 'styled-components'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const ThumbnailImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`

const Thumbnail = ({thumbnail}) => {
    return (
           <ThumbnailImg style={{backgroundImage: `url(${urlFor(thumbnail).url()})`}} />
     
    )
}

export default Thumbnail
