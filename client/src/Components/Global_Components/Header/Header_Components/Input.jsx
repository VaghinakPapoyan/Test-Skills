import React from 'react'
import styled from 'styled-components'

const InputDiv = styled.div` 
    overflow: hidden;
    position: relative;
    @media (max-width: 1040px) {
        display: none !important;
    }
`
const StyledInput = styled.input` 
    padding: 7px 42px;
    border: 1px solid #20181C17;
    font-size: 14px;
    font-weight: 400;
    width: 294px;
    line-height: 19px;
    transition: 0.4s;
    outline: none !important;
    border-radius: 5px;
    &:focus
    {
        padding-left: 16px;
        border: 1px solid #20181C55;
        & ~ img
        {
            transform: translateY(-200%);
        }
    }
`
const SearchIcon = styled.img` 
    position: absolute;
    left: 16px;
    pointer-events: none;
    top: 50%;
    transition: 0.4s;
    transform: translateY(-50%);
`

export default function Input({ children }) {
    return (
        <InputDiv>
            <StyledInput placeholder={children}/>
            <SearchIcon src='images/Header_Icons/Search.png'/>
        </InputDiv>
    )
}
