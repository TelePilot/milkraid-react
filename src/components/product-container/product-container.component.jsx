import React from 'react'
import styled from 'styled-components'
import Thumbnail from '../tumbnail/thumbnail.component'

const Container = styled.div`
    width: 100%;
    height: auto;
`

const ProductContainer = ({product}) => {
    return (
        <Container>
            <Thumbnail thumbnail={product.merchImg}/>
            <p>{product.productName}</p>
        </Container>
    )
}

export default ProductContainer
