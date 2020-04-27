import React, { createContext, useState, useEffect} from 'react'
import sanityClient from '../client'
export const ReleaseContext = createContext()

const ReleaseContextProvider = (props) => {
    const [release, setRelease] = useState([])
    useEffect(() => {
        const releaseQuery = `*[_type == "release"] | order(_createdAt desc)`
        const releaseArray = []
        sanityClient.fetch(releaseQuery).then(release => {
    
          release.forEach(release => {
              releaseArray.push(release)
          })
          setRelease(releaseArray)
          
        })
    }, [])
   
    return (
        <ReleaseContext.Provider value={{release}}>
            
            {props.children}
            
        </ReleaseContext.Provider>
    )
}

export default ReleaseContextProvider
