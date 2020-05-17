import React, { createContext, useState, useEffect, useContext} from 'react'
import sanityClient from '../client'
import Context from './context'
export const ArtistContext = createContext()

const ArtistContextProvider = (props) => {
    const [artists, setArtists] = useState([])
    const {globalState, globalDispatch} = useContext(Context)
    useEffect(() => {
        globalDispatch({type: "LOADING"})
        const artistQuery = `*[_type == "artist"] | order(date desc)`
        const artistArray = []
        sanityClient.fetch(artistQuery).then(artists => {
            
          artists.forEach(artist => {
              artistArray.push(artist)
          })
          setArtists(artistArray)
          globalDispatch({type: "LOADED"})
        })
    }, [])
   
    return (
        <ArtistContext.Provider value={{artists}}>
            
            {props.children}
            
        </ArtistContext.Provider>
    )
}

export default ArtistContextProvider
