import React from 'react'
import styled from 'styled-components'
import MainCard from './Cards/MainCard'
import SmallCards from './Cards/SmallCards'
import VerticalCards from './Cards/VerticalCards'

const StyledLeft = styled.div` 
    width: 76.5625%;
    padding-right: 24px;
    padding-bottom: 40px;
    @media (max-width: 1200px)
    {
        width: 100%;
        padding-right: 0px;
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
`

export default function Left() {
    return (
        <StyledLeft>
            <MainCard />
            <SmallCards />
            <VerticalCards />
        </StyledLeft>
    )
}
