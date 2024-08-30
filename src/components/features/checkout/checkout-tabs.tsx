import { useTranslations } from 'next-intl'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CheckoutAppearance } from './checkout-customize/checkout-appearance'
import { CheckoutFooter } from './checkout-customize/checkout-footer'
import { CheckoutHeader } from './checkout-customize/checkout-header'
import { CheckoutSummary } from './checkout-customize/checkout-summary'
import { Preview } from './checkout-customize/preview'

export function CheckoutTabs() {
  const t = useTranslations('pages.checkout')

  const tabsCheckout = [
    {
      value: 'header',
      title: t('checkout-tabs.header'),
      content: <CheckoutHeader />,
    },
    {
      value: 'footer',
      title: t('checkout-tabs.footer'),
      content: <CheckoutFooter />,
    },
    {
      value: 'summary',
      title: t('checkout-tabs.summary'),
      content: <CheckoutSummary />,
    },
    {
      value: 'appearance',
      title: t('checkout-tabs.appearance'),
      content: <CheckoutAppearance />,
    },
    {
      value: 'rules',
      title: t('checkout-tabs.rules'),
      content: <div>Content Regras</div>,
    },
  ]

  return (
    <Tabs defaultValue="header">
      <TabsList>
        {tabsCheckout.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-10 flex flex-col gap-10 lg:flex-row">
        <div className="max-w-md flex-1">
          {tabsCheckout.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </div>
        <div className="flex-1">
          <h4>Preview</h4>
          <Preview />
        </div>
      </div>
    </Tabs>
  )
}