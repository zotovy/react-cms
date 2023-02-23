import React from "react";
import { MetricItem, MetricItemContent, MetricItemTitle } from "@feats/dashboard/components";
import { ArrowUp, MoreVertical } from "react-feather";
import { MetricItemText } from "@feats/dashboard/components/metric-item/metric-item-text";
import { MetricItemValue } from "@feats/dashboard/components/metric-item/metric-item-value";
import { MetricItemChangeAndText } from "@feats/dashboard/components/metric-item/metric-item-change-and-text";
import { Area, AreaChart, CartesianGrid } from "react-untitled-ui";
import { MetricItemChange } from "@feats/dashboard/components/metric-item/metric-item-change";

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
        y: 1,
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

export const MetricItem1: React.FC = () => {
    return <MetricItem>
        <MetricItemTitle title="Views 24 hours">
            <MoreVertical/>
        </MetricItemTitle>
        <MetricItemContent>
            <MetricItemText>
                <MetricItemValue>2,000</MetricItemValue>
                <MetricItemChangeAndText>
                        <MetricItemChange>
                            <ArrowUp/>
                            100%
                        </MetricItemChange>
                    vs last month
                </MetricItemChangeAndText>
            </MetricItemText>
            <AreaChart width={128} height={64} data={data}>
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="5%" stopColor="#12B76A" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false}/>
                <Area
                    stroke="var(--untitled-success--500)"
                    fill="url(#gradient)"
                    type="natural"
                    dataKey="y"/>
            </AreaChart>
        </MetricItemContent>
    </MetricItem>
}