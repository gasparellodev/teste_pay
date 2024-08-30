import { Button } from '@/components/ui/button'
import { Handshake } from 'lucide-react'
import Image from 'next/image'

const Icon = '/negociar_icon.png'

type Props = React.HTMLAttributes<HTMLDivElement>

export function TaxasEServicos({ className, ...props }: Props) {
  return (
    <div className="flex w-full flex-col flex-wrap justify-between gap-5">
      <section className="flex flex-wrap justify-between">
        <div className="flex w-[350px] flex-col gap-2 rounded-lg border border-zinc-400 p-4 text-zinc-400">
          <p>Cartão de Crédito</p>
          <h2>
            <span className="text-xl font-bold">8,79%</span> + R$ 5,00
          </h2>
          <p>Recebimento em 2 dias</p>
        </div>
        <div className="flex w-[350px] flex-col gap-2 rounded-lg border border-zinc-400 p-4 text-zinc-400">
          <p>Pix</p>
          <h2>
            <span className="text-xl font-bold">4,50%</span> + R$ 3,00/ pix pago
          </h2>
          <p>Recebimento na hora</p>
        </div>
        <div className="flex w-[350px] flex-col gap-2 rounded-lg border border-zinc-400 p-4 text-zinc-400">
          <p>Boleto Bancário</p>
          <h2>
            <span className="text-xl font-bold">R$ 5,90</span> / boleto pago
          </h2>
          <p>Recebimento em 2 dias</p>
        </div>
      </section>
      <section className="flex flex-wrap justify-between">
        <div className="flex w-[350px] flex-col gap-2 rounded-lg border border-zinc-400 p-4 text-zinc-400">
          <p>Saque</p>
          <h2>
            <span className="text-xl font-bold">R$ 5,90</span>
          </h2>
          <p>Por saque solicitado</p>
        </div>
        <div className="flex w-[350px] flex-col gap-2 rounded-lg border border-zinc-400 p-4 text-zinc-400">
          <p>Antecipação</p>
          <h2>
            <span className="text-xl font-bold">12,00%</span>
          </h2>
          <p>Receba antes de 2 dias</p>
        </div>
        <div className="flex w-[350px] flex-col gap-2 rounded-lg border border-zinc-400 p-4 text-zinc-400">
          <p>Retenção Tempóraria</p>
          <h2>
            <span className="text-xl font-bold">10,00%</span>
            /pix e 20,00%/cartão
          </h2>
          <p>Liberado em 90 dias</p>
        </div>
      </section>
      <div className="mt-10 flex w-full justify-end">
        <Button size="sm" className="rounded-none font-bold">
          <Handshake />
          Negocie suas taxas
        </Button>
      </div>
    </div>
  )
}
