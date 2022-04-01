import React from 'react'
import styled from 'styled-components'
import Notification from './Right_Components/Notifications'
import Statistics from './Right_Components/Statistics'

const StyledRight = styled.div`
    width: 23.4375%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    @media (max-width: 1200px)
    {
        width: 100%;
    }
    &::-webkit-scrollbar {
        display: none;
    }       

    &::-webkit-scrollbar-track {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        display: none;
    }
    @media(max-width: 900px)
    {
        padding-bottom: 25px;
    }
    @media(max-width: 525px)
    {
        padding-bottom: 15px;
    }
    @media(max-width: 430px)
    {
        padding-bottom: 10px;
    }
`
export default function Right() {
    return (
        <StyledRight>
            <Statistics />
            <Notification />
        </StyledRight>
    )
}
