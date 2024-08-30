import { redirect } from 'next/navigation'
import React from 'react'

import DashboardLayout from '@/components/layouts/dashdoard-layout'
// import { serverAuth } from '@/lib/auth'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = await serverAuth()

  // if (!session) {
  //   redirect('/login')
  // }

  return <DashboardLayout>{children}</DashboardLayout>
}
