import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const ThumbnailImg = styled.div`
	width: 100%;
	height: 85%;
	position: relative;
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover;
`
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	background: rgba(255, 255, 255, 0.5);
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: opacity ease-in-out 0.5s;
	&:hover {
		opacity: 1;
	}
`

const Thumbnail = ({ thumbnail }) => {
	return (
		<ThumbnailImg
			style={{ backgroundImage: `url(${urlFor(thumbnail).url()})` }}
		>
			<Overlay></Overlay>
		</ThumbnailImg>
	)
}

export default Thumbnail
