import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React from 'react'

import { LoginForm } from '@/components/forms/login-form'
import NextIntlClientProvider from '@/contexts/next-intl-client-provider'
import { cn } from '@/lib/utils'

export default function LoginPage() {
  const t = useTranslations('pages.login')
  return (
    <div className={cn('flex w-full flex-col items-center space-y-5')}>
      <div className="space-y-3 text-center">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          {t('title')}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {t('subtitle')}
        </p>
      </div>
      <NextIntlClientProvider namespace={'pages.login'}>
        <LoginForm />
      </NextIntlClientProvider>

      <div className="flex items-center justify-end gap-2 text-sm">
        <span className="text-zinc-500 dark:text-zinc-400">
          {t('form.register.text')}
        </span>
        <Link
          href={'/signup'}
          className="font-semibold text-zinc-600 underline hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {t('form.register.label')}
        </Link>
      </div>
    </div>
  )
}
