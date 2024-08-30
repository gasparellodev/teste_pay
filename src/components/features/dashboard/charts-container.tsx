import { Invoicing } from '@/components/charts/invoicing'
import { PaymentMethods } from '@/components/charts/payment-methods'
import { Receipt } from '@/components/charts/receipt'
import { TotalSales } from '@/components/charts/total-sales'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

type Props = React.HTMLAttributes<HTMLDivElement>

export function ChartsContainer({ className, ...props }: Props) {
  return (
    <div className={cn('grid w-full grid-cols-6 gap-4', className)} {...props}>
      <div className="card col-span-6 space-y-3 rounded-2xl border border-border bg-white p-4 @container dark:bg-zinc-950 xl:col-span-4">
        <header className="flex flex-col items-start gap-4 @[400px]:flex-row @[400px]:items-center @[400px]:justify-between">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Vendas
          </h2>
        </header>
        <Separator />
        <TotalSales />
      </div>
      <div className="card col-span-6 row-start-2 space-y-3 rounded-2xl border border-border bg-white p-4 @container dark:bg-zinc-950 sm:row-start-3 md:col-span-3 xl:col-span-2 xl:col-start-5 xl:row-start-1">
        <header className="flex flex-col items-start gap-4 @[400px]:flex-row @[400px]:items-center @[400px]:justify-between">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Faturamento
          </h2>
        </header>
        <Separator />
        <Invoicing />
      </div>
      <div className="card col-span-6 space-y-3 rounded-2xl border border-border bg-white p-4 @container dark:bg-zinc-950 sm:col-span-3">
        <header className="flex flex-col items-start gap-4 @[440px]:flex-row @[440px]:items-center @[440px]:justify-between">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Métodos de Pagamento
          </h2>
        </header>
        <Separator />
        <PaymentMethods />
      </div>
      <div className="card col-span-6 space-y-3 rounded-2xl border border-border bg-white p-4 @container dark:bg-zinc-950 sm:col-span-3">
        <header className="flex flex-col items-start gap-4 @[440px]:flex-row @[440px]:items-center @[440px]:justify-between">
          <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            Índices
          </h2>
        </header>
        <Separator />
        <Receipt />
      </div>
    </div>
  )
}
