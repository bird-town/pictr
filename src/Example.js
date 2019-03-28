import React, { Component } from 'react';
import styled from 'styled-components'
import Pictr from './Pictr';

const ExamplesContainerYoyo = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default class Example extends Component {
    render = () => {
        return(
            <ExamplesContainerYoyo>
                <Pictr />
                <Pictr />
                <Pictr />
            </ExamplesContainerYoyo>
        )
    }
}