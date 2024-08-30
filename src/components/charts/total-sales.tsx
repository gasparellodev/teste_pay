'use client'

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'

const chartData = [
  { month: 'January', computador: 186, celular: 80 },
  { month: 'February', computador: 305, celular: 200 },
  { month: 'March', computador: 237, celular: 120 },
  { month: 'April', computador: 73, celular: 190 },
  { month: 'May', computador: 209, celular: 130 },
  { month: 'June', computador: 214, celular: 140 },
  { month: 'July', computador: 700, celular: 140 },
  { month: 'August', computador: 234, celular: 140 },
]

const chartConfig = {
  computador: {
    label: 'computador',
    color: 'rgb(244 244 245)',
  },
  celular: {
    label: 'celular',
    color: 'rgb(244 244 245)',
  },
} satisfies ChartConfig

export function TotalSales() {
  return (
    <>
      <ChartContainer className="max-h-[300px] w-full" config={chartConfig}>
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <YAxis className="text-xs" stroke="rgb(244 244 245)" />
          <XAxis
            dataKey="month"
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
            stroke="rgb(244 244 245)"
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel indicator="dashed" />}
          />
          <Legend
            align="right"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{
              paddingBottom: '12px',
            }}
            verticalAlign="top"
          />
          <Line
            dataKey="computador"
            type="natural"
            stroke="var(--color-computador)"
            strokeWidth={2}
            dot={{
              fill: 'var(--color-computador)',
            }}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ChartContainer>
    </>
  )
}
