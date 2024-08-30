'use client'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'

export function CoverAuth() {
  const t = useTranslations('pages.login')
  const pathname = usePathname()

  const window = '(min-width: 960px)'

  const isDesktop = useMediaQuery(window)
  if (isDesktop) {
    return (
      <div className="relative h-full max-h-full flex-1">
        <div
          className={cn(
            'fixed bottom-4 left-[52%] right-4 top-4 flex max-h-full flex-1 items-end justify-center rounded-2xl bg-cover bg-no-repeat p-6',
            {
              'bg-sign-in': pathname !== 'sign-up',
              'bg-sign-up': pathname === 'sign-up',
            },
          )}
        >
          <div className="w-full rounded-xl border border-white/30 bg-white/20 p-6 backdrop-blur">
            <h1 className="text-4xl font-semibold tracking-tighter text-white">
              {t.rich('announcement', {
                style: (chunks) => (
                  <span className="relative inline-block before:absolute before:-inset-px before:block before:-skew-x-[10deg] before:bg-brand">
                    <span className="relative font-extrabold text-zinc-800">
                      {chunks}
                    </span>
                  </span>
                ),
              })}
            </h1>
          </div>
        </div>
      </div>
    )
  }
  return null
}
