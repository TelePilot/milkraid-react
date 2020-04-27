import React, { createContext, useState, useEffect} from 'react'
import sanityClient from '../client'
export const RetailContext = createContext()

const RetailContextProvider = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const retailQuery = `*[_type == "retail"]`
        const retailArray = []
        sanityClient.fetch(retailQuery).then(products => {
    
          products.forEach(product => {
              retailArray.push(product)
          })
          setProducts(retailArray)
          
        })
    }, [])
   
    return (
        <RetailContext.Provider value={{products}}>
            
            {props.children}
            
        </RetailContext.Provider>
    )
}

export default RetailContextProvider
