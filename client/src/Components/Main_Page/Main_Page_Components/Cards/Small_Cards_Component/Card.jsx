import React from 'react'
import styled from 'styled-components'
import { AnimateSlide, AnimateSlide1, AnimateSlide2 } from "./slideAnimations.js"

const BlackBackgound = styled.div` 
    position: absolute;
    left: 50%;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    background: #15000087;
`
const StyledCard = styled.div` 
    background-image: url(${({ url }) => url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.3s;
    position: relative;
    width: 23%;
    cursor: pointer;
    height: 95px;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    animation: ${({order, margin, length, next}) => AnimateSlide(order, margin, length, next)} 0.8s forwards;
    @media(max-width: 1014px)
    {
        width: 32%;
        animation: ${({order, margin1, length, next}) => AnimateSlide1(order, margin1, length, next)} 0.8s forwards;
    }
    @media(max-width: 600px)
    {
        width: 48%;
        animation: ${({order, margin2, length, next}) => AnimateSlide2(order, margin2, length, next)} 0.8s forwards;
    }
    @media(max-width: 600px)
    {
        width: 48%;
        animation: ${({order, margin2, length, next}) => AnimateSlide2(order, margin2, length, next)} 0.8s forwards;
    }
    &:hover
    {
        &>${BlackBackgound}
        {
            opacity: 0.55
        }
    }
`
const CardBody = styled.div`
    position: relative;
    z-index: 3;
`
const Title = styled.h4` 
    font-size: 20px;
    font-weight: 500;
    color: white;
    letter-spacing: 0.02em;
    text-align: center;
    @media(max-width: 525px)
    {
        font-size: 18px;
    }
    @media(max-width: 430px)
    {
        font-size: 16px;
    }
`
const Text = styled.p` 
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: white;
    margin-top: 5px;
    letter-spacing: 0.02em;
    text-align: center;
    @media(max-width: 525px)
    {
        font-size: 11px;
    }
    @media(max-width: 430px)
    {
        font-size: 10px;
    }
`

export default function Card({ imgId, title, text, order, length, next }) 
{
    return (
        <StyledCard margin={2.6666} margin1={2} margin2={4} length={length} order={order} next={next} url={`/images/Main_Page_Icons/Small_Card_Background_${imgId}.png`}>
            <CardBody>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </CardBody>
            <BlackBackgound />
        </StyledCard>
    )
}
