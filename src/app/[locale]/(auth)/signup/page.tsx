import Link from 'next/link'
import { useTranslations } from 'next-intl'
import React from 'react'

import { SignUpForm } from '@/components/forms/signup-form'
import { cn } from '@/lib/utils'

export default function SignUpPage() {
  const t = useTranslations('pages.signup')
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
      <SignUpForm />

      <div className="flex items-center justify-end gap-2 text-sm">
        <span className="text-zinc-500 dark:text-zinc-400">
          {t('form.login.text')}
        </span>
        <Link
          href="/login"
          className="font-semibold text-zinc-600 underline hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {t('form.login.label')}
        </Link>
      </div>
    </div>
  )
}
