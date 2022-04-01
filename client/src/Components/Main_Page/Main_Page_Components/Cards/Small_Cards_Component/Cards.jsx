import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { v4 } from 'uuid'

const StyledCard = styled.div` 
    margin-top: 16px;
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 95px;
`

export default function Cards({ cards, next }) 
{
    return (
        <StyledCard>
            { 
                cards.map(card => <Card key={v4()} next={next} length={cards.length} order={card.order} title={card.title} text={card.text} imgId={card.imgId}/>)
            }
        </StyledCard>
    )
}
