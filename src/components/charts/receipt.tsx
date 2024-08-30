'use client'

import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

import PercentagePaymentMethods from './percentage-payment-methods'

const data = [
  { name: 'pix', value: 400, fill: 'rgb(244 244 245)' },
  { name: 'chargeback', value: 800, fill: 'rgb(244 244 245)' },
  { name: 'credito', value: 800, fill: 'rgb(244 244 245)' },
  { name: 'pre_chargeback', value: 300, fill: 'rgb(244 244 245)' },
  { name: 'boleto', value: 100, fill: 'rgb(244 244 245)' },
]

const dataChartConfig = {
  value: {
    label: 'Pagamentos',
  },
  pix: {
    label: 'Pix',
    color: 'rgb(244 244 245)',
  },
  chargeback: {
    label: 'Chargebacks',
    color: 'rgb(244 244 245)',
  },
  credito: {
    label: 'Crédito',
    color: 'rgb(244 244 245)',
  },
  pre_chargeback: {
    label: 'Pré-Chargebacks',
    color: 'rgb(244 244 245)',
  },
  boleto: {
    label: 'Boleto',
    color: 'rgb(244 244 245)',
  },
} satisfies ChartConfig

export function Receipt() {
  const total = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <div className="flex flex-col gap-4 @[454px]:flex-row @[454px]:items-end">
      <div className="w-[176px] pb-0">
        <ChartContainer
          config={dataChartConfig}
          className="relative aspect-square max-h-[176px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" hideLabel />}
            />
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={80}
              nameKey="name"
              paddingAngle={4}
              cornerRadius={2}
              stroke="white"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <>
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-zinc-100 text-3xl font-bold"
                          >
                            {total.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-xs"
                          >
                            Payments
                          </tspan>
                        </text>
                      </>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
      <PercentagePaymentMethods
        config={dataChartConfig}
        className="flex-1"
        data={data}
      />
    </div>
  )
}
