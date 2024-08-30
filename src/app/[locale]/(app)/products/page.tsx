'use client'

import { List, Pencil } from 'lucide-react'
import { useState } from 'react'

import ProductsConsulta from '@/components/features/produtos/productsConsulta'
import { ProductsPage } from '@/components/features/produtos/produtos'
import { ContentLayout } from '@/components/layouts/content-layout'

export default function Products() {
  const [page, setPage] = useState<number>(1)
  return (
    <ContentLayout title="Produtos">
      <div className="mb-5">
        <ul className="flex gap-5">
          <li>
            <a href="#" className="flex gap-1" onClick={() => setPage(1)}>
              <Pencil />
              Cadastrar
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-1" onClick={() => setPage(2)}>
              <List />
              Consultar
            </a>
          </li>
        </ul>
      </div>
      {page === 1 ? <ProductsPage /> : <ProductsConsulta />}
    </ContentLayout>
  )
}
