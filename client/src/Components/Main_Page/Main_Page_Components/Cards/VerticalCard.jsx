import React from 'react'
import styled from 'styled-components'
import CardBody from './Vertical_Cards_Components/CardBody'

const StyledVerticalCard = styled.div` 
  width: 31.7%;
  border-radius: 10px;
  padding: 10px;
  height: 301px;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
  &:hover
  {
    -webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.35); 
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.35);
    &>div:last-child
    {
      filter:  brightness(0.8);
    }
  }
  @media(max-width: 995px)
  {
    width: 47.8%;
    &:last-child
    {
      display: none;
    }
  }
  @media(max-width: 530px)
  {
    width: 100%;
  }
`
const StyledVerticalCardBackground = styled.div` 
  background-image: url(${({ url }) => url});
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  z-index: -1;
  transition: 0.3s;
` 

export default function VerticalCard({ imgId, title, user, info }) {
  return (
    <StyledVerticalCard>
      <CardBody title={title} user={user} info={info}/>
      <StyledVerticalCardBackground  url={`/images/Main_Page_Icons/Vertical_Card_Img_${imgId}.png`} />
    </StyledVerticalCard>
  )
}
