import React, {useContext} from 'react'
import styled from 'styled-components'
import ProductContainer from '../product-container/product-container.component'
import {RetailContext} from '../../store/RetailContext'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    
    justify-content: center;
    align-items: flex-start;
`

const RetailContainer = () => {
    const { products } = useContext(RetailContext)
    return (
        <Container>
            {products.map((product, id) =>  <ProductContainer product={product} key={id} />)}     
        </Container>
    )
}

export default RetailContainer
