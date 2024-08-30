import { OrdersList } from '@/components/features/orders/orders-list'
import { ContentLayout } from '@/components/layouts/content-layout'

export default async function Orders() {
  return (
    <ContentLayout title="Pedidos">
      <div>
        <OrdersList />
      </div>
    </ContentLayout>
  )
}
