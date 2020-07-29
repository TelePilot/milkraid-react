import React from 'react'
import styled from 'styled-components'
import sanityClient from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}
const ThumbnailImg = styled.img`
	width: 100%;
	height: auto;
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover;
`
const SoldOut = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 99.5%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.4);
	opacity: 0;
	transition: all ease-in-out 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`
const SoldOutText = styled.h3`
	color: white;
	font-size: 32px;
`

const MerchThumbnail = ({ thumbnail }, soldOut) => {
	console.log(thumbnail)
	return (
		<ImageContainer>
			<SoldOut style={soldOut ? { opacity: '1' } : { opacity: '0' }}>
				<SoldOutText>Sold Out</SoldOutText>
			</SoldOut>
			<ThumbnailImg src={urlFor(thumbnail).url()} />
		</ImageContainer>
	)
}

export default MerchThumbnail
