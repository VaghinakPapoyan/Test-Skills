import React from 'react'
import styled from 'styled-components'

const StyledInputDiv = styled.div`
  margin-top: 15px;
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  font-size: 14px;
  outline: none !important;
  padding: 5px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondColor};
  @media (max-width: 430px)
  {
    padding: 4px 0;
    font-size: 12px;
  }
  &:disabled
  {
    opacity: 0.8;
    cursor: pointer;
    background-color: transparent;
  }
  &:focus
  {
    border-bottom: 2px solid ${({ theme }) => theme.colors.thirdColor};
  }
`
const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 3px;
  @media (max-width: 430px)
  {
    font-size: 16px;
  }
`

export default function Input({ children, handleChange, name, placeholder, handleBlur, type, autoComplete, value, disabled }) {
  return (
    <StyledInputDiv>
        <Label htmlFor={name}>{children}</Label>
        <StyledInput type={type} onBlur={handleBlur} name={name} onChange={handleChange} placeholder={placeholder} id={name} autoComplete={autoComplete} value={value} disabled={disabled} />
    </StyledInputDiv>
  )
}
