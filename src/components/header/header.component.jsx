import React, {useState, useEffect} from 'react'
import sanityClient from '../../client'
import Logo from '../logo/logo.component'
import Menu from '../menu/menu.component'
import Socials from '../socials/socials.component'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const HeaderCont = styled.div`
    position: fixed;
    width: 20%;
    height: auto;
    top: 0;
    left: 0;
`

const Header = (props) => {
    const [header, setHeader] = useState('')
    const [className, setClassName] = useState("home")
    useEffect(() => {
        const headerQuery = `*[_type == "header"]
        {logo, invertedLogo, menu, socials }`
        sanityClient.fetch(headerQuery).then(header => {
    
          header.forEach(header => {
            setHeader(header)
          })
        })
    }, [])
    useEffect(function() {
        setClassName(props.match.isExact ? "home" : "not-home")
      }, [props.match.isExact])
    return (
        <HeaderCont className={className} {...props}>
            <Logo logo={header.logo} invertedLogo={header.invertedLogo} />
            <Menu menu={header.menu} />
            <Socials socials={header.socials}/>
        </HeaderCont>
    )
}

export default withRouter(Header)
