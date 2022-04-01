import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../../../Style_Settings/globalComponents'

const StyledMainCard = styled.div` 
  background-image: url("/images/Main_Page_Icons/Main_Card_Background.png");
  background-position: center;
  height: 290px;
  background-color: #070415;
  border-radius: 10px;
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  @media (max-width: 1469px)
  {
    height: 250px;
  }
  @media (max-width: 940px)
  {
    height: 230px;
  }
`

const MainCardBody = styled.div`
  padding: 40px;
  width: 100%;
  height: 100%;
`

const Title = styled.h2` 
  font-size: 30px;
  font-weight: 700;
  line-height: 42px;
  width: 45%;
  color: white;
  letter-spacing: 0.02em;
  @media (max-width: 1469px)
  {
    width: 60%;
    font-size: 26px;
    line-height: 30px;
  }
  @media (max-width: 940px)
  {
    font-size: 22px;
    width: 75%;
  }
  @media (max-width: 525px)
  {
    font-size: 20px;
    width: 80%;
  }
  @media (max-width: 430px)
  {
    width: 90%;
  }
  @media (max-width: 390px)
  {
    font-size: 18px;
    width: 100%;
  }
  @media (max-width: 340px)
  {
    font-size: 16px;
  }
`

const Infos = styled.div`
  margin-top: 30px;
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1469px)
  {
    margin-top: 25px;
    margin-bottom: 20px;
  }
  @media (max-width: 940px)
  {
    margin-top: 20px;
    margin-bottom: 18px;
  }
  @media (max-width: 525px)
  {
    margin-top: 17px;
    margin-bottom: 14px;
  }
`

const Info = styled.div` 
  margin-right: 24px;
  display: flex;
  @media (max-width: 525px)
  {
    margin-right: 20px;
  }
  @media (max-width: 430px)
  {
    margin-right: 16px;
  }
`

const InfoTitle = styled.i` 
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
  @media (max-width: 1469px)
  {
    font-size: 16px;
  }
  @media (max-width: 940px)
  {
    font-size: 14px;
  }
  @media (max-width: 525px)
  {
    font-size: 12px;
  }
  @media (max-width: 430px)
  {
    font-size: 10px;
  }
`


const InfoText = styled.p` 
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 7px;
  letter-spacing: 0.02em;
  color: white;
  @media (max-width: 1469px)
  {
    margin-left: 6px;
    font-size: 16px;
  }
  @media (max-width: 940px)
  {
    font-size: 14px;
    margin-left: 6px;
  }
`


const MyButton = styled(Button)` 
  font-size: 17px;
  font-weight: 500;
  padding: 12px 32px;
  background-color: ${({ theme }) => theme.colors.thirdColor};
  &:hover:before
  {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 1469px)
  {
    padding: 10px 28px;
    font-size: 16px;
  }
  @media (max-width: 940px)
  {
    padding: 8px 26px;
    font-size: 15px;
  }
  @media (max-width: 525px)
  {
    padding: 6px 18px;
    font-size: 13px;
  }
`

export default function MainCard() 
{
  const navigate = useNavigate()
  return (
    <StyledMainCard>
      <MainCardBody>
        <Title>
          Must expected secret NFT
          assortment is live...
        </Title>
        <Infos> 
          <Info>
            <InfoTitle>25k</InfoTitle>
            <InfoText>Artwork</InfoText>
          </Info>
          <Info>
            <InfoTitle>78K</InfoTitle>
            <InfoText>Auction</InfoText>
          </Info>
          <Info>
            <InfoTitle>16k</InfoTitle>
            <InfoText>Artist</InfoText>
          </Info>
        </Infos>
        <MyButton onClick={() => navigate("/games/snake-game")}>Explore Now</MyButton>
      </MainCardBody>
    </StyledMainCard>
  )
}
 
 