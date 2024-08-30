'use client'

import { FileInputIcon, HandCoins, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

import { DadosCadastrais } from '@/components/features/configuracoes/dadosCadastrais'
import { EnviarDocumentacao } from '@/components/features/configuracoes/enviarDocumentacao'
import { TaxasEServicos } from '@/components/features/configuracoes/taxaseServicos'
import { ContentLayout } from '@/components/layouts/content-layout'

export default function Settings() {
  const [option, setOption] = useState<number>(1)

  let ContentComponent

  switch (option) {
    case 1:
      ContentComponent = <DadosCadastrais />
      break
    case 2:
      ContentComponent = <TaxasEServicos />
      break
    case 3:
      ContentComponent = <EnviarDocumentacao />
      break
    default:
      ContentComponent = null
  }

  return (
    <ContentLayout title="Settings" className="">
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
