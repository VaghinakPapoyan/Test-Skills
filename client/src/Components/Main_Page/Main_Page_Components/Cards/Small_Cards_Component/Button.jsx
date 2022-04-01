import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

const SliderControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #F3EBFA;
    background-color: #FBF6FF;
    width: 82px;
    border-radius: 17.5px;
    padding: 5px;
`

const SliderButton = styled.button` 
    width: 31px;
    border-radius: 12.5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: none;
    height: 25px;
    background-color: white;
    outline: none !important;
    align-items: center;
    -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.07); 
    box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.07);
    transform: scale(1);
    transition: 0.2s;
    &:disabled
    {
        opacity: 0.5;
    }
    &:hover
    {
        transform: scale(0.9);
        -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.1); 
        box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.1);
    }
    &:first-child
    {
        img
        {
            transform: rotateY(180deg);
        }
    }
`

const SliderIcon = styled.img` 
    display: block;
    width: 5px;
`

export default function Button({ setCards, cards, setNext }) {

    const [active, setActive] = useState(true)

    const Next = useCallback(() => 
    {
        setCards(cards.map(card => 
        {
            card.order += 1;
            if(card.order > cards.length - 1)
            {
                card.order = 0;
            }
            return card;
        }))
        setNext(true)
        setActive(false)
        const id = setTimeout(() => 
        {
            setActive(true);
        }, 800)
        return () => clearTimeout(id)
    }, [])

    const Prev = useCallback(() => 
    {
        setCards(cards.map(card => 
        {
            card.order -= 1;
            if(card.order < 0)
            {
                card.order = 7;
            }
            return card;
        }))
        setNext(false)
        setActive(false)
        const id = setTimeout(() => 
        {
            setActive(true);
        }, 800)
        return () => clearTimeout(id)
    }, [])

    return (
          <SliderControl>
              <SliderButton disabled={!active} onClick={Prev}><SliderIcon src={process.env.PUBLIC_URL + '/images/Main_Page_Icons/Arrow_Right.png'}/></SliderButton>
              <SliderButton disabled={!active} onClick={Next}><SliderIcon src={process.env.PUBLIC_URL + '/images/Main_Page_Icons/Arrow_Right.png'}/></SliderButton>
          </SliderControl>
    )
}
