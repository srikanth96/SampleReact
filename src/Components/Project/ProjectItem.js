import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: rgb(237, 45, 35);
  font-size: 20px;
  width:10em;
  height:2em
  border-radius: 3px;
  color: white;
  border: 2px rgb(237, 45, 35);
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    background-color: rgb(185, 0, 0);
    border-color: rgb(185, 0m 0);
  }
`;

class ProjectItem extends Component {
    render() {
        return <Button>LOGIN</Button>
    }
}

export default ProjectItem;
