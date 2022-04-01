import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { v4 } from "uuid"
import { useDispatch } from "react-redux"
import { deleteNotification } from '../../../../Hooks/useNotifications'

const StyledNotifications = styled.div`
    padding: 10px 20px;
    display: block;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondColor}56;
    background-color: transparent;
    cursor: pointer;
    &:hover
    {
        padding: 15px 20px;
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondColor};
    }
    &:last-child
    {
        border: none;
    }

`
const NotificationHref = styled(Link)` 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
`
const NotificationTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
    text-align: left;
`
const NotificationBody = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
`
const NotificationText = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-top: 7px;
    border: none;
    outline: none !important;
    line-height: 1.1;
    transition: 0.3s;
    text-decoration: none;
    margin-right: 15px;
    text-align: left;
    width: 1fr;
    letter-spacing: 0.02em;
`
const NotificationDate = styled.p`
    font-size: 12px;
    font-weight: 400;
    white-space: nowrap;
`
const DontHave = styled.h3`
    font-size: 16px;
    font-weight: 700;
    padding: 10px 0px;
    text-align: center;
`
function getDate(date)
{   
    const lastDate = new Date(date)
    const thisDate = new Date();

    const minutes = thisDate.getMinutes() - lastDate.getMinutes() + ((thisDate.getHours() - lastDate.getHours()) * 60) + ((thisDate.getDay() - lastDate.getDay()) * 60 * 24)
    const hours = ((thisDate.getMinutes() - lastDate.getMinutes()) / 60) + (thisDate.getHours() - lastDate.getHours()) + ((thisDate.getDay() - lastDate.getDay()) * 24);
    const days = ((thisDate.getMinutes() - lastDate.getMinutes()) / 60 / 24) + ((thisDate.getHours() - lastDate.getHours()) / 24) + (thisDate.getDay() - lastDate.getDay());
    const Increment = minutes > 60 ? hours > 24 ? Math.floor(days) + " d" : Math.floor(hours) + " h" : Math.floor(minutes) + " min"
    return Increment
}

export default function Notifications({ notifications }) {

    const dispatch = useDispatch()

    const clickNotification = id => 
    {
        dispatch(deleteNotification(id))
    }
    return (
        <>
            {
                notifications && notifications.length
                ?
                notifications.map(notification => (
                    <StyledNotifications key={v4()} onClick={() => clickNotification(notification._id)}>
                        <NotificationBody>
                            <div>
                                <NotificationTitle>{notification.title}</NotificationTitle>
                                <NotificationText>{notification.text}</NotificationText>
                            </div>
                            <NotificationDate>{getDate(notification.date)}</NotificationDate>
                        </NotificationBody>
                        <NotificationHref to={notification.href ? notification.href : "#"} />
                    </StyledNotifications>
                ))
                :
                <DontHave>Dont have notifications!</DontHave>
            }
        </>
    )
}
