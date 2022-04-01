import React from 'react'
import styled from 'styled-components'

const StyledFilterButton = styled.div` 
    padding: 4px 12px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px;
    border-radius: 5px;
    letter-spacing: 0.02em;
    margin-left: 10px;
    cursor: pointer;
    border: 1px solid #D903681A;
    transition: 0.25s;
    &:hover
    {
        background-color: #D90368; 
        color: white;
    }
    ${({ active }) => active ? `background-color: #D90368; color: white;` : null}
`

export default function FilterButton({ children, active }) {
  return (
    <StyledFilterButton active={active}>{children}</StyledFilterButton>
  )
}
