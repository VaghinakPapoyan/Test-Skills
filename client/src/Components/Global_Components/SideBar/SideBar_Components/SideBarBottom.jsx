import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../Style_Settings/globalComponents'

const StyledSideBarBottom = styled.div` 
  width: 100%;
  position: absolute;
  left: 50%;
  top: 100%;
  padding: 0 40px;
  transform: translateY(-100%) translateX(-50%) translateY(-40px);
  @media (max-height: 760px)
  {
    display: none;
  }
`
const Container = styled.div` 
  border-radius: 15px;
  background-color: rgb(249 243 254);
  height: 100%;
  width: 100%;
  position: relative;
  &:before
  {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 15px;
    transform: translate(-50%, -50%) scale(1.015);
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, ${({ theme }) => theme.colors.secondColor} 0%, rgba(0,0,0,0) 100%);
    z-index: -1;
  }
`

const Cube = styled.img` 
  width: 105px;
  position: relative;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: block;
`
const CubeShadow = styled(Cube)`
  position: absolute;
  top: 20px;
  opacity: 0.7;
  filter: blur(7px);
  z-index: 1;
`
const Text = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.04em;
  text-align: center;
  margin-top: -35px;
`
const ThisButton = styled(Button)` 
  margin-top: 20px;
  margin-bottom: 23.5px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`


export default function SideBarButton() 
{
  return (
    <StyledSideBarBottom>
      <Container>
        <Cube src={process.env.PUBLIC_URL + '/images/Header_Icons/Cube.png'}/>
        <CubeShadow src={process.env.PUBLIC_URL + '/images/Header_Icons/Cube.png'}/>
        <Text>Upgrade Your Dashboard</Text>
        <ThisButton>Upgrade</ThisButton>
      </Container>
    </StyledSideBarBottom>
  )
}
