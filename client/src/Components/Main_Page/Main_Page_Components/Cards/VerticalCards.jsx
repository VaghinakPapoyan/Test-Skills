import React from 'react'
import styled from 'styled-components'
import VerticalCard from './VerticalCard'
import { v4 } from 'uuid'
import Title from './Vertical_Cards_Components/Title'

const StyledVerticalCards = styled.div` 
    margin-top: 25px;
`
const AllVerticalCards = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export default function VerticalCards() 
{
    const cards = 
    [
        {
            imgId: "1",
            title: "Jose Delbo",
            user: 
            {
                username: "Creator name",
                logo: "/images/Header_Icons/Logo.png"
            },
            info: { left: "600 ETH", right: "End In 2h 30m" }
        },
        {
            imgId: "2",
            title: "Mad Dog Jones",
            user: 
            {
                username: "Creator name",
                logo: "/images/Header_Icons/Logo.png"
            },
            info: { left: "600 ETH", right: "End In 2h 30m" }
        },
        {
            imgId: "3",
            title: "Art name",
            user: 
            {
                username: "Creator name",
                logo: "/images/Header_Icons/Logo.png"
            },
            info: { left: "600 ETH", right: "End In 2h 30m" }
        },
    ]
    return (
        <StyledVerticalCards>
            <Title />
            <AllVerticalCards>
                {
                    cards.map(card => <VerticalCard key={v4()} imgId={card.imgId} title={card.title} user={card.user} info={card.info}/>)
                }
            </AllVerticalCards>
        </StyledVerticalCards>
    )
}
