'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import SignOutIcon from './icons/sign-out-icon'
import UserIcon from './icons/user-icon'
import Wallet02Icon from './icons/wallet-02-icon'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { buttonVariants } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function UserNav({ isOpen }: { isOpen: boolean }) {
  const [openUserNav, setOpenUserNav] = useState(false)
  const [openSignOut, setOpenSignOut] = useState(false)
  const { data } = useSession()
  const t = useTranslations('common.menu-sidebar.user-nav')

  return (
    <>
      <DropdownMenu open={openUserNav} onOpenChange={setOpenUserNav}>
        <DropdownMenuTrigger
          disabled={!data}
          className={cn(
            'group flex h-[50px] w-full items-center gap-2 rounded-lg px-2 py-1 hover:bg-white/5',
            {
              'w-fit': !isOpen,
            },
          )}
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-[#4A505E]">
              <UserIcon className="h-4 w-4 text-[#7C818C]" />
            </AvatarFallback>
            <AvatarImage
              src={data?.user?.image ?? ''}
              alt={`Profile picture ${data?.user?.name}`}
            />
          </Avatar>
          {!data ? (
            <div
              className={cn(
                'flex flex-1 flex-col items-start space-y-1 whitespace-nowrap',
                {
                  'hidden -translate-x-96 opacity-0': !isOpen,
                },
              )}
            >
              <Skeleton className="h-5 w-28 rounded-sm bg-zinc-700" />
              <Skeleton className="h-4 w-11 rounded-sm bg-zinc-700" />
            </div>
          ) : (
            <div
              className={cn(
                'flex flex-1 flex-col items-start space-y-0.5 whitespace-nowrap',
                {
                  'hidden -translate-x-96 opacity-0': !isOpen,
                },
              )}
            >
              <p className="block max-w-[150px] truncate text-left font-medium text-zinc-200">
                {data?.user?.name}
              </p>
              <p className="block max-w-[150px] truncate text-xs text-zinc-400">
                Admin
              </p>
            </div>
          )}

          <ChevronRight
            className={cn(
              'h-3 w-3 text-zinc-400 transition-transform duration-200',
              {
                'hidden -translate-x-96 opacity-0': !isOpen,
              },
            )}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="rounded-xl"
          sideOffset={25}
          side="right"
          align="end"
        >
          <DropdownMenuLabel className="text-xs font-normal text-zinc-500">
            {data?.user?.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/account" className="cursor-pointer gap-2">
                <UserIcon className="size-4 text-zinc-500" />
                <span>{t('account')}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/wallet" className="cursor-pointer gap-2">
                <Wallet02Icon className="size-4 text-zinc-500" />
                <span>{t('wallet')}</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 text-red-400 focus:bg-red-400/5 focus:text-red-400"
            onClick={() => setOpenSignOut(!openSignOut)}
          >
            <SignOutIcon className="size-4" />
            <span className="font-medium">{t('sign-out')}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={openSignOut} onOpenChange={setOpenSignOut}>
        <AlertDialogContent className="rounded-xl border border-zinc-200 dark:border-zinc-800 sm:rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja sair do Iluckpay?</AlertDialogTitle>
            <AlertDialogDescription>
              Seu login será desconectado e os dados não salvos da sessão serão
              perdidos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: 'destructive' })}
              onClick={() => {
                signOut()
              }}
            >
              Sim, desejo sair
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
