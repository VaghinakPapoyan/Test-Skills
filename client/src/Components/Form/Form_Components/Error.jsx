import React from 'react'
import styled from 'styled-components'

const StyledError = styled.p`
    color: ${({ theme }) => theme.colors.thirdColor};
    font-size: 14px;
    margin-top: 5px;
`

export default function Error({ children }) {
  return (
    <StyledError>{children}</StyledError>
  )
}
