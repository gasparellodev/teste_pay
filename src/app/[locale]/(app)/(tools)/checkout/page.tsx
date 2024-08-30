import { CheckoutTabs } from '@/components/features/checkout/checkout-tabs'
import { ContentLayout } from '@/components/layouts/content-layout'

export default function Checkout() {
  return (
    <ContentLayout title="Checkout">
      <CheckoutTabs />
    </ContentLayout>
  )
}