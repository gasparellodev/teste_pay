import { ChevronLeft } from 'lucide-react'

import { cn } from '@/lib/utils'

interface SidebarToggleProps {
  isOpen: boolean | undefined
  setIsOpen?: () => void
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className="invisible absolute -right-[10px] top-2 z-20 lg:visible">
      <button
        onClick={() => setIsOpen?.()}
        className="flex size-6 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800 text-zinc-500"
      >
        <ChevronLeft
          className={cn(
            'size-4 transition-transform duration-700 ease-in-out',
            isOpen === false ? 'rotate-180' : 'rotate-0',
          )}
        />
      </button>
    </div>
  )
}
