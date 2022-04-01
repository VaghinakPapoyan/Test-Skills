import React from 'react'
import styled from 'styled-components'

const Tooltip = styled.div`
    padding: 7px 15px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.secondColor};
    border: 2px solid white;
    -webkit-box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.4); 
    box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.4);
    &>h4
    {
        color: white;
        text-align: center;
        font-weight: 700;
    }
    &>p
    {
        text-align: center;
        margin-top: 5px;
        color: white;
    }
`

export default function DiagramTooltip({active, payload, label})  {
    if(active)
    {
    return (
            <Tooltip>
                <h4>{label}</h4>
                <p>{payload[0].payload.value}</p>
            </Tooltip>
        )
    }
    return null
}
