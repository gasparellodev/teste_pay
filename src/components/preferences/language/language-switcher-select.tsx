'use client'

import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Fragment, useTransition } from 'react'

import BrFlagIcon from '@/components/icons/flags/br-flag-icon'
import PtFlagIcon from '@/components/icons/flags/pt-flag-icon'
import UsFlagIcon from '@/components/icons/flags/us-flag-icon'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { usePathname, useRouter } from '@/navigation'

export function LanguageSwitcherSelect({
  defaultValue,
}: {
  defaultValue: string
}) {
  const t = useTranslations('common.theme-switcher')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange(nextLocale: 'pt-br' | 'en-us' | 'pt-pt' | undefined) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  const languages = [
    {
      path: 'pt-br',
      label: t('pt-br'),
      flag: BrFlagIcon,
    },
    {
      path: 'pt-pt',
      label: t('pt-pt'),
      flag: PtFlagIcon,
    },
    {
      path: 'en-us',
      label: t('en-US'),
      flag: UsFlagIcon,
    },
  ] as const

  const languageSelected = languages.find(
    (language) => language.path === defaultValue,
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="group h-auto gap-2 border-transparent p-2"
          size="sm"
        >
          {languageSelected && <languageSelected.flag className="h-5 w-5" />}
          <span className="text-muted-foreground flex-1 text-sm">
            {languageSelected?.label}
          </span>
          <ChevronDown className="size-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {isPending &&
          Array.from({ length: 3 }).map((_, index) => (
            <div className="flex gap-2 rounded-lg p-1" key={index}>
              <Skeleton className="size-5 rounded-full" />
              <Skeleton className="h-5 flex-1 rounded-md" />
            </div>
          ))}
        {languages.map((language, index) => {
          return (
            <Fragment key={index}>
              <DropdownMenuItem
                className="cursor-pointer gap-2"
                onClick={() => onSelectChange(language.path)}
              >
                <language.flag className="h-5 w-5 rounded-full object-cover" />
                <span className="text-muted-foreground text-sm">
                  {language.label}
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="last-of-type:hidden" />
            </Fragment>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
