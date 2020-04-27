import React from 'react'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const LogoImg = styled.img`
    width: 100%;
    height: auto;
    cursor: pointer;
`
const Logo = ({logo, invertedLogo}) => {
    
    return (
    <Link to="/"> <LogoImg src={window.location.pathname === '/' ? urlFor(invertedLogo).url() : urlFor(logo).url() } alt="MilkRaid Logo" /> </Link> 
    )
}

export default Logo
