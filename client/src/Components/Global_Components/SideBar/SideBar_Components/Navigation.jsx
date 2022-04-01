import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavigation = styled(NavLink)` 
    margin-top: 25px;
    padding: 10px;
    padding-right: 43px;
    display: flex;  
    white-space: nowrap;
    justify-content: flex-start;
    border-radius: 6px;
    text-decoration: none;
    align-items: center;
    transition: 0.2s;
    &:hover
    {
        background-color: ${({ theme }) => theme.colors.secondColor};
        & > p
        {
            color: ${({ theme }) => theme.colors.secondTextColor} !important;
        }
        & > div
        {
            background-color: white;
        }
    }
    &.active
    {
        background-color: ${({ theme }) => theme.colors.secondColor};
        & > p
        {
            font-weight: 500;
            color: ${({ theme }) => theme.colors.secondTextColor} !important;
        }
        & > div
        {
            background-color: white;
        }
    }
`
const NavigationIcon = styled.div`
    background-color: #403E3F;
    -webkit-mask: url(${({ icon }) => icon}) no-repeat center;
    mask: url(${({ icon }) => icon}) no-repeat center;
    fill: #fff;
    display: inline-block;
    width: 18px;
    height: 18px;
`
const NavigationText = styled.p`
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.navigationTextColor};
`

export default function Navigation({ children, to, icon }) {
    return (
        <StyledNavigation to={to}>
            <NavigationIcon icon={icon} />
            <NavigationText>{children}</NavigationText>
        </StyledNavigation>
    )
}
