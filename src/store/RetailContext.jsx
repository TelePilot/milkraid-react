import React, { createContext, useState, useEffect, useContext } from 'react'
import sanityClient from '../client'
import Context from './context'
export const RetailContext = createContext()

const RetailContextProvider = (props) => {
	const { globalState, globalDispatch } = useContext(Context)
	const [products, setProducts] = useState([])
	useEffect(() => {
		globalDispatch({ type: 'LOADING' })
		const retailQuery = `*[_type == "retail"]`
		const retailArray = []
		sanityClient.fetch(retailQuery).then((products) => {
			products.forEach((product) => {
				retailArray.push(product)
			})
			setProducts(retailArray)
			globalDispatch({ type: 'LOADED' })
		})
	}, [globalDispatch])

	return (
		<RetailContext.Provider value={{ products }}>
			{props.children}
		</RetailContext.Provider>
	)
}

export default RetailContextProvider
