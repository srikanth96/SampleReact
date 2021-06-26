import React, { Component } from 'react'
import styled from 'styled-components'
import HamburgerBtn from '../assets/HamburgerBtn'

const NavBar = styled.div `
    display: flex;
    background-color : #45A49E;
    width: 18rem;
    height:100vh;
    flex-direction: column;
`

class Header extends Component {
    render() {
        return (
            <NavBar>
                <HamburgerBtn/>
            </NavBar>
        );
    }
}

export default Header;
