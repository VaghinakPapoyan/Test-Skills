import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`

export default function Title({ children }) {
  return (
    <StyledTitle>{ children }</StyledTitle>
  )
}
