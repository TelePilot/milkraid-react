import React, { useContext } from 'react'
import styled from 'styled-components'
import ProductContainer from '../product-container/product-container.component'
import { RetailContext } from '../../store/RetailContext'

const Container = styled.div`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 5%;
	padding: 0 5%;
	box-sizing: border-box;
`

const RetailContainer = () => {
	const { products } = useContext(RetailContext)
	console.log(products)
	return (
		<Container>
			{products.map((product, id) => (
				<ProductContainer product={product} key={id} />
			))}
		</Container>
	)
}

export default RetailContainer
