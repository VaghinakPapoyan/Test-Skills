import React from 'react'
import styled from 'styled-components'

const StyledScores = styled.p` 
    font-size: 15px;
    padding: 7px 14px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.secondColor};
    font-weight: 500;
`

export default function Scores({ id, children }) {
    return (
        <StyledScores id={id}>{children}</StyledScores>
    )
}
