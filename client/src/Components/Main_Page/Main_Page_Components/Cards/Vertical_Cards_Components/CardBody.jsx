import React from 'react'
import styled from 'styled-components'

const StyledCardBody = styled.div` 
  padding: 16px;
  position: relative;
  width: 100%;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -100%);
`

const Title = styled.h3` 
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  color: white;
  position: relative;
  z-index: 2;
  letter-spacing: 0.02em;
`

const User = styled.div` 
  font-size: 12px;
  font-style: normal;
  margin-top: 8px;
  position: relative;
  z-index: 2;
  margin-bottom: 11px;
  color: white;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.02em;
  display: flex; 
  align-items: center;
`

const Info = styled.div` 
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
`

const InfoLeft = styled.h4` 
  font-size: 14px;
  font-style: normal;
  color: white;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.02em;
`

const InfoRight = styled.p`
  font-size: 12px;
  color: white;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0.02em;
`

const CardBodyBackground = styled.div` 
  width: 100%;
  height: 100%;
  left: 50%;
  position: absolute;
  backdrop-filter: blur(40px);
  top: 50%;
  background: #3030304D;
  opacity: 0.8;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`

const UserLogo = styled.img` 
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin-right: 7px;
`

export default function CardBody({ title, user, info }) {
  return (
    <StyledCardBody>
      <CardBodyBackground />
      <Title>{title}</Title>
      <User><UserLogo src={user.logo} />{user.username}</User>
      <Info>
        <InfoLeft>{info.left}</InfoLeft>
        <InfoRight>{info.right}</InfoRight>
      </Info>
    </StyledCardBody>
  )
}
