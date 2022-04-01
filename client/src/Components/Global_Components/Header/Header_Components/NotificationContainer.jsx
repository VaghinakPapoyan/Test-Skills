import NotificationDropdown from './NotificationDropdown'
import { keyframes } from 'styled-components'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'

const NotificationAnimationInfinite = keyframes` 
     from
     {
      opacity: 0.5;
     }
     25%
     {
      opacity: 1;
     }
     50%
     {
      transform: rotate(0);
      opacity: 0.5;
     }
     55%
     {
        transform: rotate(17deg);
     }
     60%
     {
        transform: rotate(0);
     }
     65%
     {
        transform: rotate(-15deg);
     }
     70%
     {
        transform: rotate(0);
     }
     75%
     {
        opacity: 1;
        transform: rotate(14deg);
     }
     80%
     {
        transform: rotate(0deg);
     }
     85%
     {
        transform: rotate(-12deg);
     }
     90%
     {
        transform: rotate(0deg);
     }
     95%
     {
        transform: rotate(-10deg);
     }
     to
     {
        opacity: 0.5;
        transform: rotate(0deg);
     }
`
const NotificationAnimation = keyframes`
     from
     {

     }
     from
     {
        transform: rotate(0);
     }
     10%
     {
        transform: rotate(17deg);
     }
     20%
     {
        transform: rotate(0);
     }
     30%
     {
        transform: rotate(-15deg);
     }
     40%
     {
        transform: rotate(0);
     }
     50%
     {
        transform: rotate(14deg);
     }
     60%
     {
        transform: rotate(0deg);
     }
     70%
     {
        transform: rotate(-12deg);
     }
     80%
     {
        transform: rotate(0deg);
     }
     90%
     {
        transform: rotate(-10deg);
     }
     to
     {
        transform: rotate(0deg);
     }
`

const Notification = styled.img`
    display: block;
    margin-left: 96px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    transform-origin: center top;
    transform: rotate(0);
    animation: ${({ animate }) => animate ? css`${NotificationAnimationInfinite} infinite linear 2.6s` : "asd"};
    &:hover
    {
        animation: ${NotificationAnimation} linear 1.3s;
    }
    @media(max-width: 490px)
    {
       display: none;
    }
`

export default function NotificationContainer({secondNotificationActive}) 
{
    
    const [notificationActive, setNotificationActive] = useState(false);
    const notifications = useSelector(state => state.notifications.notifications)
    return (
        <>
            <Notification animate={(!!notifications.length && !notificationActive)} onClick={() => setNotificationActive(state => !state)} src='images/Header_Icons/Notification.png' />
            <NotificationDropdown notifications={notifications} active={notificationActive || secondNotificationActive}/>
        </>
    )
}
