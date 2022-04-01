import React from 'react'
import styled from 'styled-components'

const UserImg = styled.img`
  height: 34px;
  width: 34px;
  @media (max-width: 1370px) and ( min-width: 1200px )
  {
    display: none;
  }
  @media (max-width: 426px)
  {
    display: none;
  }
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #FF642F2B;
`
const Info = styled.div`
  margin-left: 10px;
  display: block;
`
const Title = styled.h4`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
`
const SubTitle = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 5px;
  line-height: 14px;
  letter-spacing: 0.02em;
`
const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const Tag = styled.i`
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  color: white;
  line-height: 14px;
  border-radius: 5px;
  margin-right: 7px;
  letter-spacing: 0.02em;
  margin-top: 5px;
  display: block;
  padding: 2px 5px;
  background-color: ${({ theme }) => theme.colors.thirdColor};
`
const Data = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  margin-top: 5px;
  line-height: 14px;
  letter-spacing: 0.02em;
`
const MoreButtons = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  padding: 0px 10px;
  cursor: pointer;
  transform: translate(-100%, 10px) translateX(-6px);
  opacity: 1;
  transition: 0.2s;
  &:hover
  {
    opacity: 0.7;
  }
`
const MoreButton = styled.div`
  height: 2.22px;
  width: 2.22px;
  border-radius: 50%;
  background: #403E3F;
  margin-top: 1.6px;
  &:first-child
  {
    margin-top: 0;
  }
`
const StyledNotification = styled.div`
  padding: 10px 16px;
  transition: 0.2s;
  position: relative;
  display: flex;
  cursor: pointer;
  @media (max-width: 1370px) and ( min-width: 1200px )
  {
    padding: 7px;
    &:hover
    {
      padding: 10px 7px !important;
    }
  }
  @media (max-width: 426px)
  {
    padding: 7px;
    &:hover
    {
      padding: 10px 7px !important;
    }
  }
  border-bottom:2px solid ${({ theme }) => theme.colors.thirdColor}22;
  &:hover
  {
    padding: 16px;
    & ${MoreButtons}
    {
      transform: translate(-100%, 16px) translateX(-6px);
    }
  }
`

export default function Notification({ userImg, title, subTitle, date, tag }) {
  return (
    <StyledNotification>
      <UserImg src={process.env.PUBLIC_URL + userImg}/>
      <Info>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <InfoBottom>
          <Tag>{tag}</Tag>
          <Data>{date}</Data>
        </InfoBottom>
      </Info>
      <MoreButtons>
        <MoreButton />
        <MoreButton />
        <MoreButton />
      </MoreButtons>
    </StyledNotification>
  )
}
