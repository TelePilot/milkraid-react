import React from 'react'
import styled from 'styled-components'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const SocialCont = styled.div`
    width: 100%;
    height: auto; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 15%;
`

const SocialItem = styled.a`
    margin-right: 10px;
    img {
        width: 40px;
        height: auto;
    }
   

`

const Socials = ({socials}) => {
    return (
        <SocialCont>
            {socials ? socials.map((item, id) => <SocialItem href={item.link} key={id}>
                <img src={urlFor(item.icon).url()} alt={item.name}/>
            </SocialItem>): null}
        </SocialCont>
    )
}

export default Socials
