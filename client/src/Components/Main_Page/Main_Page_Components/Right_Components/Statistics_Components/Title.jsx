import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h4` 
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.02em;
`

export default function Title({ children }) {
    return (
        <StyledTitle>{children}</StyledTitle>
    )
}
