import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.02em;
    padding: 5px 12px;
    border: none;
    outline: none !important;
    background-color: ${({ theme }) => theme.colors.thirdColor}10;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.thirdColor};
    cursor: pointer;
    transition: 0.3s;
    &:hover
    {
        background-color: ${({ theme }) => theme.colors.thirdColor};
        color: ${({ theme }) => theme.colors.defaultColor};
    }
`

export default function Button() {
    return (
        <StyledButton>View all</StyledButton>
    )
}
