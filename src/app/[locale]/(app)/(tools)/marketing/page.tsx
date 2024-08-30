'use client'

import { FileInputIcon, HandCoins, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

import { Cupons } from '@/components/features/marketing/cupons'
import { LinkPagamento } from '@/components/features/marketing/linkPagamento'
import { ContentLayout } from '@/components/layouts/content-layout'

export default function Marketing() {
  const [option, setOption] = useState<number>(1)

  let ContentComponent

  switch (option) {
    case 1:
      ContentComponent = <Cupons />
      break
    case 2:
      ContentComponent = <LinkPagamento />
      break
    default:
      ContentComponent = null
  }

  return (
    <ContentLayout title="Marketing" className="">
      <div className="mb-5">
        <ul className="flex gap-5">
          <li>
            <a href="#" className="flex gap-1" onClick={() => setOption(1)}>
              <ShoppingBag />
              Dados Cadastrais
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-1" onClick={() => setOption(2)}>
              <HandCoins />
              Taxas e Serviços
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-1" onClick={() => setOption(3)}>
              <FileInputIcon />
              Enviar documentação
            </a>
          </li>
        </ul>
      </div>
      {ContentComponent}
    </ContentLayout>
  )
}
