import React from 'react'
import { Tooltip, ResponsiveContainer, AreaChart, Area, XAxis } from 'recharts'
import DiagramTooltip from './DiagramTooltip'

export default function Diagram({ data }) {
    return (
        <ResponsiveContainer width="99%" height={140}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8115E7" stopOpacity={0.5}/>
                      <stop offset="40%" stopColor="#8115E7" stopOpacity={0.2}/>
                      <stop offset="100%" stopColor="#8115E7" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Area strokeWidth={3} activeDot={true} type="monotone" stroke='#8115E7' id='colorUv' dataKey="value" fill="url(#color)"/>
                <Tooltip content={<DiagramTooltip />}/>
                <XAxis tickMargin={15} tickLine={false} axisLine={false} dataKey="month" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
