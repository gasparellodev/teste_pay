'use client'

import { useSidebarToggle } from '@/hooks/use-sidebar-toggle'
import { useStore } from '@/hooks/use-store'
import { cn } from '@/lib/utils'

import { Footer } from './footer'
import { Sidebar } from './sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900',
          sidebar?.isOpen === false ? 'lg:ml-[76px]' : 'lg:ml-60',
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          'transition-[margin-left] duration-300 ease-in-out',
          sidebar?.isOpen === false ? 'lg:ml-[76px]' : 'lg:ml-60',
        )}
      >
        <Footer />
      </footer>
    </>
  )
}
