import React from 'react'
import styled from 'styled-components'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const ThumbnailImg = styled.img`
  width: 70%;
`

const Thumbnail = ({thumbnail}) => {
    return (
      <div>
           <ThumbnailImg src={urlFor(thumbnail).url()} alt="artist/product image" />
      </div>
     
        
    )
}

export default Thumbnail
