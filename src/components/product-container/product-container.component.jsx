import React from 'react'
import styled from 'styled-components'
import MerchThumbnail from '../merch-thumbnail/merch-thumbnail.component'

const Container = styled.div`
	width: 100%;
	position: relative;
	height: auto;
	p {
		color: black;
	}
`
const ImageContainer = styled.div`
	width: 100%;
	height: auto;
`

const ProductContainer = ({ product }) => {
	return (
		<Container>
			<ImageContainer>
				<MerchThumbnail
					soldOut={product.soldOut}
					thumbnail={product.merchImg}
				/>
			</ImageContainer>

			<p>{product.productName}</p>
		</Container>
	)
}

export default ProductContainer
