import React from 'react'
import styled from 'styled-components'

const ProgressDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
`
const Info = styled.div`
    padding-right: 30px;
    min-width: 92px;
    white-space: nowrap;
    width: 40%;
    @media (max-width: 1370px) and ( min-width: 1200px )
    {
        width: 100%;
        text-align: center;
    }
    @media ( max-width: 1200px )
    {
        width: 30%;
    }
    @media ( max-width: 426px )
    {
        width: 100%;
        text-align: center;
    }
`
const InfoValue = styled.p`
    margin-top: 2px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.02em;
`
const InfoTitle = styled.p`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.02em;
`
const StyledProgress = styled.div`
    position: relative;
    height: 10px;
    border-radius: 10px;
    background-color: ${({ color, theme }) => color === "thirdColor" ? theme.colors.thirdColor : theme.colors.secondColor}40;
    width: 55%;
    @media (max-width: 1370px) and ( min-width: 1200px )
    {
        margin-top: 10px;
        width: 100%;
    }
    @media ( max-width: 1200px )
    {
        width: 70%;
    }
    @media ( max-width: 426px )
    {
        margin-top: 10px;
        width: 100%;
    }
`
const ProgressLine = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ color, theme }) => color === "thirdColor" ? theme.colors.thirdColor : theme.colors.secondColor};
    height: 10px;
    border-radius: 10px;
    width: ${({ percent }) => percent}%;
`
const ProgressCircle = styled.div`
    width: 18px;
    height: 18px;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 4px 4px 0px #8115E71F;
    display: flex;
    position: absolute;
    border-radius: 50%;
    background-color: ${({ color, theme }) => color === "thirdColor" ? theme.colors.thirdColor : theme.colors.secondColor};
    justify-content: center;
    top: 50%;
    left: ${({ percent }) => percent}%;
    align-items: center;
    transform: translate(-100%, -50%);
`
const CircleText = styled.p`
    font-size: 6px;
    font-style: normal;
    font-weight: 500;
    color: white;
    line-height: 6px;
    letter-spacing: 0.02em;
`

export default function Progress({ value, maxValue, children, color }) {
    
    const percent = Math.round(value / maxValue * 100);

    return (
        <ProgressDiv>
            <Info>
                <InfoTitle>{children}</InfoTitle>
                <InfoValue>{value}</InfoValue>
            </Info>
            <StyledProgress color={color} >
                <ProgressLine color={color} percent={percent} />
                <ProgressCircle color={color} percent={percent}>
                    <CircleText>{percent}</CircleText>
                </ProgressCircle>
            </StyledProgress>
        </ProgressDiv>
    )
}
