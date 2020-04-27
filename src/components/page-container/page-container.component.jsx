import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 5% 0 100px 20%;
    box-sizing: border-box;
    overflow-x: hidden;
`

const PageContainer = (props) => {
    if(window.scrollY) {
        window.scroll(0,0)
    }
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default PageContainer
