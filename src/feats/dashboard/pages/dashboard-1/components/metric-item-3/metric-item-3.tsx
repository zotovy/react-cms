import React from "react";
import { MetricItem, MetricItemContent, MetricItemTitle } from "@feats/dashboard/components";
import { ArrowUp, MoreVertical } from "react-feather";
import { MetricItemText } from "@feats/dashboard/components/metric-item/metric-item-text";
import { MetricItemValue } from "@feats/dashboard/components/metric-item/metric-item-value";
import { MetricItemChangeAndText } from "@feats/dashboard/components/metric-item/metric-item-change-and-text";
import { Area, AreaChart, CartesianGrid, LineGradient } from "react-untitled-ui";

const data = [
    { 
        x: 0,
        y: 0,
    },
    {
        x: 1,
        y: 2,
    },
    {
        x: 3,
        y: 3,
    },
    {
        x: 4,
        y: 5,
    },
    {
        x: 5,
        y: 8,
    },
]

export const MetricItem3: React.FC = () => {
    return <MetricItem>
        <MetricItemTitle title="Session duration">
            <MoreVertical/>
        </MetricItemTitle>
        <MetricItemContent>
            <MetricItemText>
                <MetricItemValue>3m 52s</MetricItemValue>
                <MetricItemChangeAndText>
                        <span>
                            <ArrowUp/>
                            2%
                        </span>
                    vs last month
                </MetricItemChangeAndText>
            </MetricItemText>
            <AreaChart width={128} height={64} data={data}>
                <defs>
                    <linearGradient id="gradient-3" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="5%" stopColor="var(--untitled-success--500)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false}/>
                <Area
                    stroke="var(--untitled-success--500)"
                    fill="url(#gradient-3)"
                    type="natural"
                    dataKey="y"/>
            </AreaChart>
        </MetricItemContent>
    </MetricItem>
}