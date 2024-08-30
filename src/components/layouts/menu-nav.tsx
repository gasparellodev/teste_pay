'use client'

import { motion } from 'framer-motion'
import { Ellipsis } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { getMenuList } from '@/lib/menu-list'
import { cn } from '@/lib/utils'

import { ScrollArea } from '../ui/scroll-area'
import { CollapseMenuButton } from './collapse-menu-button'

interface MenuProps {
  isOpen: boolean | undefined
}

export function MenuNav({ isOpen }: MenuProps) {
  const t = useTranslations('common.menu-sidebar')
  const pathname = usePathname()
  const menuList = getMenuList(pathname)

  return (
    <ScrollArea className="h-full max-h-full [&>div>div[style]]:!block">
      <nav className="mt-12 h-full w-full">
        <ul className="flex flex-col items-start gap-3">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li
              key={index + (groupLabel ?? '')}
              className="flex w-full flex-col gap-3 px-5 text-zinc-500"
            >
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="max-w-[248px] truncate px-2 text-xs text-zinc-400">
                  {t(`groups.${groupLabel}`)}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger className="w-full">
                      <div className="flex w-full cursor-default items-center justify-center">
                        <Ellipsis className="h-4 w-4" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" align="end">
                      <p>{t(`groups.${groupLabel}`)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className=""></p>
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Link
                              href={href}
                              className={cn(
                                'relative flex h-9 w-full items-center gap-3 rounded-md p-2 text-zinc-300 hover:bg-white/5',
                                !isOpen && 'w-fit',
                                {
                                  'bg-white/5 text-zinc-100': active,
                                },
                              )}
                            >
                              <Icon className="size-5" />
                              <p
                                className={cn(
                                  'flex-1 truncate font-medium',
                                  isOpen === false
                                    ? 'hidden -translate-x-96 opacity-0'
                                    : 'block translate-x-0 opacity-100',
                                )}
                              >
                                {t(label)}
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
                            </Link>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent sideOffset={25} side="right">
                              {t(label)}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={t(label)}
                        active={active}
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  ),
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  )
}
