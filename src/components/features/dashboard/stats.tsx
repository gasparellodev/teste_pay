import { ArrowUp, EyeIcon } from 'lucide-react'

import DollarReceiveIcon from '@/components/icons/dollar-receive-icon'
import InvoiceIcon from '@/components/icons/invoice-icon'
import ShoppingCartRemoveIcon from '@/components/icons/shopping-cart-remove-icon'
import { formatToCurrency } from '@/helpers/formats'
import { cn } from '@/lib/utils'
type Props = React.HTMLAttributes<HTMLDivElement>

const data = [
  {
    title: 'Total em Vendas',
    value: 4000,
    percentage: 4.5,
    icon: DollarReceiveIcon,
  },
  {
    title: 'Pedidos Pagos',
    value: 15000,
    percentage: 12.3,
    icon: DollarReceiveIcon,
  },
  {
    title: 'Ticket Médio',
    value: 7500,
    percentage: 9.8,
    icon: InvoiceIcon,
  },
  {
    title: 'Total de Estornos',
    value: 200,
    percentage: -5.2,
    icon: ShoppingCartRemoveIcon,
  },
]

export function Stats({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'border-border bg-border grid w-full gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4',
        className,
      )}
      {...props}
    >
      {data.map(({ icon: Icon, percentage, title, value }, idx) => (
        <div className="space-y-4 bg-zinc-50 p-5 dark:bg-zinc-900" key={idx}>
          <header className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              {title}
            </h3>
            <Icon className="text-muted-foreground size-5" stroke={'1'} />
          </header>
          <b className="block text-3xl font-bold text-zinc-800 dark:text-zinc-100">
            {formatToCurrency(value)}
          </b>
          <div className="flex items-center space-x-1.5">
            <span className="inline-flex items-center gap-x-1.5 rounded-md border border-green-500 px-2 py-0.5 text-xs font-medium text-green-500 shadow-sm">
              <ArrowUp className="size-3" />
              {percentage.toString()}%
            </span>
            <span className="text-muted-foreground text-sm">
              desde o último mês
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
