import { MenuIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

import IluckpayPayIcon from '../../../public/brand/iluckpay-icon-white.png'
import IluckpayPayText from '../../../public/brand/iluckpay-text-white.png'
import { MenuNav } from './menu-nav'

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex h-full flex-col border-zinc-700 bg-zinc-950 px-0 sm:w-72"
        side="left"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <div
            className={cn(
              'mx-7 flex h-6 max-w-36 items-center justify-center gap-3',
            )}
          >
            <Image
              src={IluckpayPayIcon}
              alt="Logo Iluckpay"
              className="h-full w-fit"
            />
            <Image
              src={IluckpayPayText}
              alt="Logo Iluckpay"
              className={cn('h-full object-contain text-left')}
            />
          </div>
        </SheetHeader>
        <MenuNav isOpen />
      </SheetContent>
    </Sheet>
  )
}
