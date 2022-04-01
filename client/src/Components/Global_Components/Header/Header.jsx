import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../Style_Settings/globalComponents'
import Input from './Header_Components/Input'
import Profile from './Header_Components/Profile'

const StyledHeader = styled.header` 
    height: 80px;
    background-color: ${({ theme }) => theme.colors.defaultColor};
    width: 100%;
    position: relative;
`
const HeaderContainer = styled(Container)` 
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h2` 
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
`
const HeaderRight = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MyInput = styled(Input)`
`

export default function Header() {
    return (
        <StyledHeader>
            <HeaderContainer>
                <Title>Dashboard</Title>
                <HeaderRight>
                    <MyInput>Search Here</MyInput>
                    <Profile />
                </HeaderRight>
            </HeaderContainer>
        </StyledHeader>
    )
}
