'use client'

import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'

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
  { month: 'August', computador: 214, celular: 140 },
  { month: 'September', computador: 214, celular: 140 },
  { month: 'October', computador: 214, celular: 140 },
  { month: 'November', computador: 214, celular: 140 },
  { month: 'December', computador: 214, celular: 140 },
]

const chartConfig = {
  computador: {
    label: 'Computador',
    color: 'rgb(244 244 245)',
  },
  celular: {
    label: 'Celular',
    color: 'rgb(244 244 245)',
  },
} satisfies ChartConfig

export function Invoicing() {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-full max-h-[300px] max-w-full"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <YAxis className="text-xs" stroke="rgb(244 244 245)" />
        <XAxis
          dataKey="month"
          tickMargin={10}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke="rgb(244 244 245)"
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
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
        <Bar dataKey="computador" fill="var(--color-computador)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
