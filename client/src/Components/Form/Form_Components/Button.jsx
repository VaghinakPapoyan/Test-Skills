import React from 'react'
import styled from 'styled-components'
import {Button as Butt}  from "../../../Style_Settings/globalComponents.js"

const StyledButton = styled(Butt)`
  font-size: 16px;
  padding: 7px 20px;
  font-weight: 600;
  @media (max-width: 430px)
  {
    padding: 5px 15px;
    font-size: 14px;
  }
  &:hover:before
  {
    width: 100px;
    height: 100px;
  }
  &:disabled
  {
    opacity: 0.3;
  }
  ${({ big }) => big ? "&:hover:before{width: 120px !important;height: 120px !important;}" : ""}
`

export default function Button({ children, disabled, onSubmit, type, big }) {
  return (
    <StyledButton onClick={onSubmit} disabled={disabled} type={type} big={big}>{children}</StyledButton>
  )
}
