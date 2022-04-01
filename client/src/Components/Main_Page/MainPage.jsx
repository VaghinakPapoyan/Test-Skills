import React from 'react'
import styled from 'styled-components'
import { Container } from '../../Style_Settings/globalComponents'
import Right from './Main_Page_Components/Right'
import Left from './Main_Page_Components/Left'

const StyledMainPage = styled.div`
  padding: 40px 0;
  display: flex;
  padding-bottom: 0;
  width: 100%;
  max-height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  &::-webkit-scrollbar {
      display: none;
  }       
  &::-webkit-scrollbar-track {
      display: none;
  }
  &::-webkit-scrollbar-thumb {
      display: none;
  }
  @media(max-width: 900px)
  {
      padding: 25px 0px;
  }
  @media(max-width: 525px)
  {
      padding: 15px 0;
  }
  @media(max-width: 430px)
  {
      padding: 10px 0;
  }
`

export default function MainPage() {
  return (
    <Container>
      <StyledMainPage>
        <Left />
        <Right />
      </StyledMainPage>
    </Container>
  )
}
