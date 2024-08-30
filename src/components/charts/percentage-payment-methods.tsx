import React from 'react'

import { ChartConfig } from '@/components/ui/chart'
import { Progress } from '@/components/ui/progress'
import { formatToWord } from '@/helpers/formats'
import { cn } from '@/lib/utils'

type Data = {
  name: string
  value: number
}

type Props = {
  data: Data[]
  config: ChartConfig
} & React.HTMLAttributes<HTMLDivElement>

export default function PercentagePaymentMethods({
  className,
  data,
  config,
  ...props
}: Props) {
  const total = data.reduce((prev, curr) => prev + curr.value, 0)

  if (data.length === 0)
    return (
      <p className="text-custom-grayDarker font-medium md:max-w-sm">
        Any data to show for now.
      </p>
    )

  return (
    <div
      className={cn('grid w-full grid-cols-2 gap-3 text-xs', className)}
      {...props}
    >
      {data.map((item, index) => {
        const percentage = (item.value / total) * 100
        return (
          <div key={index} className="h-fit w-full space-y-px">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="size-2 rounded"
                  style={{ backgroundColor: config[item.name].color }}
                />
                <span className="flex-1 text-xs text-muted-foreground">
                  {formatToWord(item.name)}
                </span>
              </div>
              <span className="font-medium text-muted-foreground">
                {percentage.toFixed(0)}%
              </span>
            </div>
            <Progress
              value={percentage}
              indicatorStyle={{
                backgroundColor: config[item.name].color,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
