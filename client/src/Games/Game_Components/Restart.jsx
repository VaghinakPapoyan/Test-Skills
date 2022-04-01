import React from 'react'
import styled from 'styled-components'
import Button, { MyButton } from './Button'

const StyledRestart = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondColor}22;
    transform: translate(-50%, -100%);
    transition: 0.4s;
    &.active
    {
        top: 50%;
        transform: translate(-50%, -50%);
    }
`
const RestartButton = styled(MyButton)` 
    font-size: 17px;
    padding: 10px 25px;
    &:hover:before
    {
        width: 120px;
        height: 120px;
    }
`

export default function Restart({ children, onClick }) {
  return (
    <StyledRestart className='restart'>
        <RestartButton onClick={onClick}>{children}</RestartButton>
    </StyledRestart>
  )
}
