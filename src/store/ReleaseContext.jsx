import React, { createContext, useState, useEffect, useContext} from 'react'
import sanityClient from '../client'
import Context from './context'
export const ReleaseContext = createContext()

const ReleaseContextProvider = (props) => {
    const [release, setRelease] = useState([])
    const {globalState, globalDispatch} = useContext(Context)
    useEffect(() => {
        globalDispatch({type: "LOADING"})
        const releaseQuery = `*[_type == "release"] | order(_createdAt desc)`
        const releaseArray = []
        sanityClient.fetch(releaseQuery).then(release => {
            
          release.forEach(release => {
              releaseArray.push(release)
          })
          setRelease(releaseArray)
          globalDispatch({type: "LOADED"})
        })
    }, [])
   
    return (
        <ReleaseContext.Provider value={{release}}>
            
            {props.children}
            
        </ReleaseContext.Provider>
    )
}

export default ReleaseContextProvider
