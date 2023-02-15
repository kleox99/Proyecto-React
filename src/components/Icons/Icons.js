import React from 'react'
import styled from 'styled-components';
import {paths, viewbox} from './paths'

const Svg = styled.svg.attrs({
    xmlns: "http://www.w3.org/2000/svg"
})`
    width: 24px;
    height: 24px;
    fill: black;
`

export const Icons = ({type}) => {
    return (
        <Svg viewBox={viewbox[type]}>
            {paths[type]}         
        </Svg>
    )
}
