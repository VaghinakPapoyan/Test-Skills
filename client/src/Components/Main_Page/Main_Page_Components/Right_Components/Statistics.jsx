import React from 'react'
import styled from 'styled-components'
import Button from './Statistics_Components/Button'
import Diagram from './Statistics_Components/Diagram'
import Progress from './Statistics_Components/Progress'
import Title from './Statistics_Components/Title'

export const RightCard = styled.div`
    background-color: ${({ theme }) => theme.colors.defaultColor};
    padding: 20px;
    width: 100%;
    border-radius: 10px;
`

const MyRightCard = styled(RightCard)`
    margin-bottom: 20px;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Hr = styled.div`
    margin-top: 28px;
`

const data = 
[
    {
        value: 10,
        month: "Jan"
    },
    {
        value: 8,
        month: "Feb"    
    },
    {
        value: 10,
        month: "Mar"
    },
    {
        value: 14,
        month: "Apr"
    },
    {
        value: 15,
        month: "May"
    },
    {
        value: 13,
        month: "Jun"
    },
    {
        value: 11,
        month: "Jul"
    },
    {
        value: 8,
        month: "Aug"    
    },
    {
        value: 10,
        month: "Sep"
    },
    {
        value: 12,
        month: "Oct"
    },
    {
        value: 10,
        month: "Nov"
    },
    {
        value: 13,
        month: "Dec"
    },
]

export default function Statistics() {
  return (
    <MyRightCard>
        <Top>
            <Title>Statistics</Title>
            <Button>View all</Button>
        </Top>
        <Progress value={145} maxValue={230}>Total Art sold</Progress>
        <Progress value={545} color="thirdColor" maxValue={600}>Total Art sold</Progress>
        <Hr />
        <Diagram data={data} />
    </MyRightCard>
  )
}
