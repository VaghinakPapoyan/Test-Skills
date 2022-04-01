import styled from 'styled-components'
import Cards from './Small_Cards_Component/Cards'
import Title from './Small_Cards_Component/Title'
import React, { useState } from 'react'

const StyledSmallCards = styled.div` 
    margin-top: 24px;
`

export default function SmallCards() 
{

    const [cards, setCards] = useState([
        {
            title: "Cyber Kongz",
            text: "5000.22 ETH ",
            order: 1,
            imgId: 1
        },
        {
            title: "Bulls TheBlock",
            text: "4050.22 ETH ",
            order: 2,
            imgId: 2
        },
        {
            title: "Curio.Cards",
            text: "36220.22 ETH",
            order: 3,
            imgId: 3
        },
        {
            title: "The Sandbox",
            text: "3421.22 ETH ",
            order: 4,
            imgId: 4
        },
        {
            title: "Cyber Kongz",
            text: "5000.22 ETH ",
            order: 5,
            imgId: 2
        },
        {
            title: "Bulls TheBlock",
            text: "4050.22 ETH ",
            order: 6,
            imgId: 3
        },
        {
            title: "Curio.Cards",
            text: "36220.22 ETH",
            order: 7,
            imgId: 4
        },
        {
            title: "The Sandbox",
            text: "3421.22 ETH ",
            order: 0,
            imgId: 1
        },
    ])

    const [next, setNext] = useState(null)

    return (
        <StyledSmallCards>
            <Title setCards={setCards} setNext={setNext} cards={cards} />
            <Cards next={next} cards={cards} />
        </StyledSmallCards>
    )
}
