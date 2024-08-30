import Image from 'next/image'

import { useSidebarToggle } from '@/hooks/use-sidebar-toggle'
import { useStore } from '@/hooks/use-store'
import { cn } from '@/lib/utils'

import IluckpayPayIcon from '../../../public/brand/iluckpay-icon-white.png'
import IluckpayPayText from '../../../public/logo.png'
import { UserNav } from '../user-nav'
import { MenuNav } from './menu-nav'
import { SidebarToggle } from './sidebar-toggle'

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <aside
      className={cn(
        'bg-sidebar dark:bg-background fixed bottom-0 left-0 top-0 z-20 h-screen -translate-x-full transition-[width] duration-300 ease-in-out lg:translate-x-0',
        sidebar?.isOpen === false ? 'w-[4.75rem]' : 'w-60',
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div
        className={cn(
          'relative flex h-full flex-col overflow-clip py-5 shadow-md dark:shadow-zinc-800',
          {
            '': sidebar?.isOpen,
          },
        )}
      >
        <div className="px-6">
          <div
            className={cn(
              'flex h-6 max-w-36 items-center justify-normal gap-3',
              {
                '': sidebar?.isOpen === false,
              },
            )}
          >
            {/* <Image
              src={IluckpayPayIcon}
              alt="Logo Iluckpay"
              className="h-full w-fit"
            /> */}
            <Image
              src={IluckpayPayText} // aqui
              alt="Logo Iluckpay"
              className={cn('mt-2 h-auto object-contain p-7 text-left', {
                'hidden -translate-x-96 opacity-0': sidebar?.isOpen === false,
              })}
            />
          </div>
        </div>
        <MenuNav isOpen={sidebar?.isOpen} />
        <div
          className={cn('flex items-center justify-center px-5', {
            '': sidebar?.isOpen,
          })}
        >
          <UserNav isOpen={sidebar?.isOpen} />
        </div>
      </div>
    </aside>
  )
}
