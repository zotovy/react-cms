import React, { FC, memo } from "react";
import { MetricItem, MetricItemContent, MetricItemTitle } from "@feats/dashboard/components";
import { ArrowDown, MoreVertical } from "react-feather";
import { MetricItemText } from "@feats/dashboard/components/metric-item/metric-item-text";
import { MetricItemValue } from "@feats/dashboard/components/metric-item/metric-item-value";
import { MetricItemChangeAndText } from "@feats/dashboard/components/metric-item/metric-item-change-and-text";
import { Area, AreaChart, CartesianGrid } from "react-untitled-ui";
import { MetricItemChange } from "@feats/dashboard/components/metric-item/metric-item-change";

export type MetricItem2Props = {
    
}

const data = [
    {
        x: 0,
        y: 10,
    },
    {
        x: 1,
        y: 4,
    },
    {
        x: 3,
        y: 6,
    },
    {
        x: 4,
        y: 0,
    },
]

export const MetricItem2: FC<MetricItem2Props> = memo(() => {
    return <MetricItem>
        <MetricItemTitle title="Sessions">
            <MoreVertical/>
        </MetricItemTitle>
        <MetricItemContent>
            <MetricItemText>
                <MetricItemValue>26.4k</MetricItemValue>
                <MetricItemChangeAndText>
                        <MetricItemChange color="var(--untitled-error--500)">
                            <ArrowDown/>
                            2%
                        </MetricItemChange>
                    vs last month
                </MetricItemChangeAndText>
            </MetricItemText>
            <AreaChart width={128} height={64} data={data}>
                <defs>
                    <linearGradient id="gradient-2" x1="0" y1="0" x2="1" y2="2">
                        <stop offset="5%" stopColor="var(--untitled-error--300)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false}/>
                <Area
                    stroke="var(--untitled-error--500)"
                    fill="url(#gradient-2)"
                    type="natural"
                    dataKey="y"/>
            </AreaChart>
        </MetricItemContent>
    </MetricItem>

})