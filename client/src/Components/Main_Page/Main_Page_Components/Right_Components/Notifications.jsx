import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Statistics_Components/Button'
import Title from './Statistics_Components/Title'
import { RightCard } from './Statistics'
import Notification from './Notifications_Components/Notification'
import { v4 } from 'uuid'

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledNotifications = styled.div` 
    margin-top: 26px;
    overflow-y: scroll;
    height: 350px;
    &::-webkit-scrollbar {
        display: none;
    }       

    &::-webkit-scrollbar-track {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        display: none;
    }
`

export default function Notifications() {

    const [notifications, setNotifications] = useState([
        {
            userImg: "/images/Main_Page_Icons/Notification_4.png",
            title: "Steve Jau Croc",
            subTitle: "Has Been Sold 120 ETH",
            date: "16 December 2021",
            tag: "Fda-1"
        },
        {
            userImg: "/images/Main_Page_Icons/Notification_2.png",
            title: "Bee Keeper Croc",
            subTitle: "Invited Crocs League society with a unique collectable NFT.",
            date: "16 December 2021",
            tag: "League"
        },
        {
            userImg: "/images/Main_Page_Icons/Notification_1.png",
            title: "Bee Keeper Croc",
            subTitle: "Invited Crocs League society with a unique collectable NFT.",
            date: "16 December 2021",
            tag: "League"
        },
        {
            userImg: "/images/Main_Page_Icons/Notification_3.png",
            title: "Bee Keeper Croc",
            subTitle: "Invited Crocs League society with a unique collectable NFT.",
            date: "16 December 2021",
            tag: "League"
        },
    ])

    return (
        <RightCard>
            <Top>
                <Title>Notification</Title>
                <Button>View all</Button>
            </Top>
            <StyledNotifications>
                {
                    notifications.map(notification => <Notification key={v4()} userImg={notification.userImg} title={notification.title} subTitle={notification.subTitle} date={notification.date} tag={notification.tag}/>)
                }
            </StyledNotifications>
        </RightCard>
    )
}
