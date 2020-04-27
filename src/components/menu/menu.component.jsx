import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuCont = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    padding: 5% 15%;
    `
const MenuItem = styled(Link)`
    text-decoration: none;
    font-size: 42px;
    cursor: pointer;

`

const Menu = ({menu}) => {
    console.log(menu)
    return (
        <MenuCont>
            {menu ? menu.map((item, id) =>  <MenuItem style={window.location.pathname === '/' ? {color: 'white' }: {color: 'black'}} to={item.link} key={id}>{item.name}</MenuItem>): null}
        </MenuCont>
    )
}

export default Menu
