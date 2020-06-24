import React from 'react'
import styled from 'styled-components'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const SocialCont = styled.div`

    height: auto; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15%;
`

const SocialItem = styled.a`
    margin-right: 10px;
    img {
        width: 40px;
        height: auto;
    }
   

`

const Socials = ({socials, home}) => {
    return (
        <SocialCont>
            {socials ? socials.map((item, id) => <SocialItem href={item.link} key={id}>
             
                <img src={home === 'home' ? urlFor(item.icon[0].invertedIcon).url() :urlFor(item.icon[0].icon).url()} alt={item.name}/>
            </SocialItem>): null}
        </SocialCont>
    )
}

export default Socials
