import React from 'react'

const Spotify = ({embed}) => {
    console.log(embed)
    return (
        <iframe title={embed} src={embed} width="100%" height="82" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    )
}

export default Spotify
