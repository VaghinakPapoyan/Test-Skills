import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import NotificationContainer from './NotificationContainer'
import ProfileDropdown from './ProfileDropdown'

const StyledProfile = styled.div` 
    margin-left: 24px;
    display: flex;
    position: relative;
    justify-content: center;    
    align-items: center;
`

const ProfileInfo = styled.div` 
    cursor: pointer;
`

const Name = styled.p` 
    font-size: 14px;
    font-style: normal;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 19px;
    text-align: left;
`

const Level = styled.i` 
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Logo = styled.img` 
    cursor: pointer;
    display: block;
    width: 29px;
    height: 29px;
    margin-right: 10px;
    border: 1px solid ${({ theme }) => theme.colors.secondColor};
    border-radius: 50%;
`

const ArrowBottom = styled.img` 
    margin-top: 4px;
    display: block;
    margin-left: 5px;
    transition: 0.4s;
    ${({ active }) => active ? "transform: rotate(180deg);" : null}
`

const Fire = styled.img` 
   width: 10px;
   height: 10px;
   display: block;
   margin-right: 3px;
`


export default function Profile() {

   const [dropdownActive, setDropdownActive] = useState(false);
   const [secondNotificationActive, setSecondNotificationActive] = useState(false);
   const user = useSelector(state => state.user)

   return (
      <StyledProfile>
         <Logo src={process.env.PUBLIC_URL + '/images/Header_Icons/Logo.png'}/>
         <ProfileInfo onClick={() => setDropdownActive(state => !state)}>
            <Name>{user.username || "Isn't Registered."}<ArrowBottom active={dropdownActive} src={process.env.PUBLIC_URL + '/images/Header_Icons/Arrow_bottom.png'}/></Name>
            <Level>{user.level ? <><Fire src={process.env.PUBLIC_URL + "\\images\\Header_Icons\\fire.png"}/>{user.level} level</> : "Registration or Login"}</Level>
         </ProfileInfo>
         <NotificationContainer secondNotificationActive={secondNotificationActive} />
         <ProfileDropdown setDropdownActive={setDropdownActive} setSecondNotificationActive={setSecondNotificationActive} authored={user.authored} active={dropdownActive}/>
      </StyledProfile>
   )
}
