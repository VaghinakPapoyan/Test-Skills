import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'

const TitleDiv = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MyTitle = styled.h3` 
    font-size: 17px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: left;
`

export default function Title({ setCards, cards, setNext }) {
    return (
        <TitleDiv>
            <MyTitle>Treanding</MyTitle>
            <Filter />
        </TitleDiv>
    )
}
