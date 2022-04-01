import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2` 
    font-size: 38px;
    font-weight: 800;
    text-align: center;
    margin-top: 30px;
    padding: 5px;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondColor};
    margin-bottom: 20px;
`

export default function Title({ children }) {
    return (
        <StyledTitle>{children}</StyledTitle>
    )
}
