import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navigation from './SideBar_Components/Navigation.jsx'
import SideBarBottom from './SideBar_Components/SideBarBottom.jsx'
import { mouseStart, mouseMove, mouseEnd } from './SideBar_Components/useSlide.js'

const StyledSideBar = styled.div` 
    display: inline-block;
    height: 100vh;
    padding: 20px 40px;
    position: relative;
    left: 0;
    box-sizing: border-box;
    padding-top: 0;
    transition: 0.4s;
    background-color: ${({ theme }) => theme.colors.defaultColor};
    @media(max-width: 760px)
    {
        position: fixed;
        z-index: 2;
        -webkit-box-shadow: 5px 0px 7px 5px rgba(129,21,231,0.05); 
        box-shadow: 5px 0px 7px 5px rgba(129,21,231,0.05);
        transform: translateX(-100%) translateX(2.5px);
        border-right: 2.5px solid ${({ theme }) => theme.colors.secondColor}55;
        ${({ active }) => active ? "transform: translateX(0%)" : null}
    }
`
const LogoDiv = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`
const Logo = styled.img` 
    display: flex;
    width: 111px;
    justify-content: center;
    align-items: center;
`
const Navigations = styled.nav` 
`

export default function SideBar() 
{
    const [sidebarActive, setSidebarActive] = useState(false);
    useEffect(() => 
    {
        document.addEventListener("mouseup", mouseEnd)
        document.addEventListener("mousedown", mouseStart)
        document.addEventListener("mousemove", e => mouseMove(e)(setSidebarActive))
        document.addEventListener("touchend", mouseEnd)
        document.addEventListener("touchstart", mouseStart)
        document.addEventListener("touchmove", e => mouseMove(e)(setSidebarActive))
        return () => {
            document.removeEventListener("mouseStart", mouseStart)
            document.removeEventListener("mouseup", mouseEnd)
            document.removeEventListener("mousemove", e => mouseMove(e)(setSidebarActive))
            document.removeEventListener("touchend", mouseEnd)
            document.removeEventListener("touchstart", mouseStart)
            document.removeEventListener("touchmove", e => mouseMove(e)(setSidebarActive))
        }
    })
    return (
        <StyledSideBar active={sidebarActive}>
            <LogoDiv>
                <Logo src={"/images/Logo.png"}/>
            </LogoDiv>
            <Navigations>
                <Navigation to="/" icon="/images/Header_Icons/Dashboard.svg">Dashboard</Navigation>
                <Navigation to="/a" icon="/images/Header_Icons/Database.svg">Store</Navigation>
                <Navigation to="/b" icon="/images/Header_Icons/Wallet.svg">Wallet</Navigation>
                <Navigation to="/c" icon="/images/Header_Icons/Chart_alt.svg">Active Bids</Navigation>
                <Navigation to="/d" icon="/images/Header_Icons/Time_Progress.svg">History</Navigation>
                <Navigation to="/e" icon="/images/Header_Icons/Pipe.svg">Analytics</Navigation>
            </Navigations>
            <SideBarBottom />
        </StyledSideBar>
    )
}
