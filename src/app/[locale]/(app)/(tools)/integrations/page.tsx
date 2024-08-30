'use client'

import { KeyIcon, ShoppingBag } from 'lucide-react'
import React, { useState } from 'react'

import { ChavesDeApi } from '@/components/features/integrações/chavesdeapi'
import { Shopify } from '@/components/features/integrações/shopify'
import { ContentLayout } from '@/components/layouts/content-layout'

export default function Integrations() {
  const [option, setOption] = useState<number>(1)
  return (
    <>
      <ContentLayout title="Integrações">
        <div className="mb-5">
          <ul className="flex gap-5">
            <li>
              <a href="#" className="flex gap-1" onClick={() => setOption(1)}>
                <ShoppingBag />
                Shopify
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-1" onClick={() => setOption(2)}>
                <KeyIcon />
                Chaves de API
              </a>
            </li>
          </ul>
        </div>
        {option === 1 ? <Shopify /> : <ChavesDeApi />}
      </ContentLayout>
    </>
  )
}
