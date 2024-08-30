'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType, useState } from 'react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

type Submenu = {
  href: string
  label: string
  active: boolean
}

interface CollapseMenuButtonProps {
  icon: ElementType
  label: string
  active: boolean
  submenus: Submenu[]
  isOpen: boolean | undefined
}

export function CollapseMenuButton({
  icon: Icon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps) {
  const isSubmenuActive = submenus.some((submenu) => submenu.active)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive)

  return isOpen ? (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="w-full"
    >
      <CollapsibleTrigger className="h-9 w-full [&[data-state=open]>div>div>svg]:rotate-180">
        <div
          className={cn(
            'flex w-full items-center justify-between gap-3 rounded-l-md p-2 text-zinc-300 hover:bg-white/5',
            !isOpen && 'mx-auto w-fit justify-center rounded-md',
          )}
        >
          <div
            className={cn(
              'relative flex w-full items-center gap-3 rounded-l-md text-zinc-300',
            )}
          >
            <Icon className="size-5" />
            <p
              className={cn(
                'max-w-[140px] truncate font-medium',
                isOpen
                  ? 'block translate-x-0 opacity-100'
                  : 'hidden -translate-x-96 opacity-0',
              )}
            >
              {label}
            </p>
            {active && (
              <motion.span
                layoutId="bubble"
                className="absolute -right-5 bottom-0 top-0 z-10 h-full w-1 !rounded-l-[1px] !rounded-r-none bg-zinc-50"
                style={{ borderRadius: 9999 }}
                transition={{
                  type: 'spring',
                  bounce: 0.2,
                  duration: 0.6,
                }}
              />
            )}
          </div>
          <div
            className={cn(
              'whitespace-nowrap',
              isOpen
                ? 'block translate-x-0 opacity-100'
                : 'hidden -translate-x-96 opacity-0',
            )}
          >
            <ChevronDown
              size={18}
              className="transition-transform duration-200"
            />
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden pl-4">
        <div className="mt-3 space-y-3 border-l border-zinc-600">
          {submenus.map(({ href, label, active }, index) => (
            <Link
              href={href}
              key={index}
              className={cn(
                'block pl-6 text-sm text-zinc-300 hover:text-zinc-50',
                {
                  'border-brand border-l-2': active,
                },
              )}
            >
              <p
                className={cn(
                  'max-w-[170px] truncate',
                  isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-96 opacity-0',
                )}
              >
                {label}
              </p>
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger
              className={cn(
                'flex w-full items-center justify-between gap-3 rounded-l-md p-2 text-zinc-300 hover:bg-white/5',
                !isOpen && 'mx-auto w-fit justify-center rounded-md',
                {
                  'bg-white/5 text-zinc-100': active,
                  "after:absolute after:bottom-0 after:right-0 after:top-0 after:h-full after:w-1 after:rounded-l-sm after:bg-zinc-50 after:content-['']":
                    active && isOpen,
                },
              )}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center text-zinc-300">
                  <Icon className="size-5" />
                  <p
                    className={cn(
                      'max-w-[200px] truncate',
                      isOpen === false
                        ? 'hidden opacity-0'
                        : 'block opacity-100',
                    )}
                  >
                    {label}
                  </p>
                </div>
              </div>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="right" sideOffset={25} align="start">
        <DropdownMenuLabel className="max-w-[190px] truncate text-zinc-800 dark:text-zinc-200">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link className="cursor-pointer text-zinc-500" href={href}>
              <p className="max-w-[180px] truncate">{label}</p>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
