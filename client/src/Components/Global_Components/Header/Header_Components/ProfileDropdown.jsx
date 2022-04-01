import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { logout } from '../../../../Hooks/useAuth'

const Dropdown = styled.div` 
    position: absolute;
    left: 50%;
    top: 0;
    border: 1px solid ${({ theme }) => theme.colors.secondColor};
    overflow: hidden;
    border-radius: 10px;
    width: 200px;
    pointer-events: none;
    z-index: 9;
    transform: translate(-50%, 0);
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors.defaultColor};
    -webkit-box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.secondColor}20; 
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.secondColor}20;
    opacity: 0;
    ${({ active}) => active ? "transform: translate(-50%, 30px); top: 100%; opacity: 1; pointer-events: auto;" : null}
    @media(max-width: 490px)
    {
        left: 100%;
        transform: translate(-100%, 0);
        ${({ active}) => active ? "transform: translate(-100%, 30px); top: 100%; opacity: 1; pointer-events: auto;" : null}
    }
`
const ElementLink = styled(NavLink)` 
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    display: block;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none !important;
    line-height: 23px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondColor}56;
    letter-spacing: 0.02em;
    padding: 7px 0;
    &:hover
    {
        background-color: ${({ theme }) => theme.colors.secondColor};
        color:  ${({ theme }) => theme.colors.defaultColor};
    }
    &:last-child
    {
        border: none;
    }
`

const ElementButton = styled.button` 
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    display: block;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none !important;
    line-height: 23px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondColor}56;
    letter-spacing: 0.02em;
    padding: 7px 0;
    &:hover
    {
        background-color: ${({ theme }) => theme.colors.secondColor};
        color:  ${({ theme }) => theme.colors.defaultColor};
    }
    &:last-child
    {
        border: none;
    }
`

const ElementNotification = styled(ElementButton)` 
    @media(min-width: 490px)
    {
       display: none;
    }
`



export default function ProfileDropdown({ active, authored, setSecondNotificationActive, setDropdownActive }) {

    const dispatch = useDispatch();
    
    if(authored)
    {
        return (
            <Dropdown active={active}>
                <ElementButton onClick={() => logout(dispatch)}>Logout</ElementButton>
                <ElementLink to="account/verification">Verification</ElementLink>
                <ElementNotification onClick={() => {setSecondNotificationActive(state => !state); setDropdownActive(state => !state);}}>Notifications</ElementNotification>
            </Dropdown>
        )
    }
    else
    {
        return (
            <Dropdown active={active}>
                <ElementLink to="account/registration">Registration</ElementLink>
                <ElementLink to="account/log-in">Log In</ElementLink>
            </Dropdown>
        )
    }
}
