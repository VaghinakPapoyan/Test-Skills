import React from 'react'
import styled from 'styled-components'
import Notifications from './Notifications'

const Dropdown = styled.div` 
    position: absolute;
    left: 100%;
    top: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondColor};
    overflow: hidden;
    border-radius: 10px;
    pointer-events: none;
    z-index: 9;
    padding: 5px 5px;
    transform: translate(40px, 40px);
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors.defaultColor};
    -webkit-box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.secondColor}20; 
    box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.secondColor}20;
    min-width: 300px;
    max-width: 600px;
    opacity: 0;
    ${({ active }) => active ? "transform: translate(-100%, 40px); opacity: 1; pointer-events: auto;" : null}
`

export default function NotificationDropdown({ active, notifications }) {
    return (
        <Dropdown active={active}>
            <Notifications notifications={notifications} />
        </Dropdown>
    )
}
