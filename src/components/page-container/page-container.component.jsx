import React, {useContext} from 'react'
import styled from 'styled-components'
import Context from '../../store/context'
import Loader from '../loader/loader.component'

const Container = styled.div`
    width: 100%;
    padding: 2% 0 100px 20%;
    box-sizing: border-box;
    overflow-x: hidden;
`

const PageContainer = (props) => {
    if(window.scrollY) {
        window.scroll(0,0)
    }
    const { globalState } = useContext(Context)
    return (
        <Container>
            {
                globalState.isLoaded ?
                props.children :
                <Loader/>
                
            }
        </Container>
    )
}

export default PageContainer
