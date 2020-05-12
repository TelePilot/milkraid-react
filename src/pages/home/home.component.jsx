import React, {useEffect} from 'react'

const Home = () => {
    useEffect(() => {
        document.getElementById('wrapper').style.display = 'block'
        return function cleanup() {
            document.getElementById('wrapper').style.display = 'none'
        }
    },[])
    return (
        <div id="three-home" style={{pointerEvents: 'none', width: '100%', height: '100vh'}}>
        </div>
    )
}

export default Home
