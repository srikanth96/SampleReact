import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const MenuBtn = styled.div `
    background-color : white;
    display: flex;
    animation: ${rotate} 2s linear infinite;
    flex-direction: column;
    border: 2px;
    border-color: white;
    padding: 0.65em;
    padding-top: 0.75em;
    padding-bottom : 0.75em;
    border-radius : 10em;
    width: 3rem;
    height : 3rem;
    justify-content: space-around;
    align-content: center;
    z-index: 10;
    margin:1rem;
    margin-left: 16.5rem;
    cursor: pointer;
`
const Line1 = styled.div `
    background-color : #45A49E;
    height : 0.25rem;
    margin-top:0.1rem;
    border : 2px;
    border-radius: 2px;
`

const Line2 = styled.div `
    background-color : #45A49E;
    width : 1rem;
    height: 0.22rem;
    border : 2px;
    border-radius: 2px;
`

const Line3 = styled.div `
    background-color : #45A49E;
    width : 1.3rem;
    height: 0.22rem;
    border : 2px;
    border-radius: 2px;
`

export class HamburgerBtn extends Component {
    handleEvent() {
        alert("Click pressed");
    }
    render() {
        return (
            <>
            <MenuBtn onClick = {this.handleEvent} >
                <Line1/>
                <Line2/>
                <Line3/>
            </MenuBtn>
        </>     
        )
    }
}
export default HamburgerBtn
