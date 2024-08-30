import Link from 'next/link'
import { useTranslations } from 'next-intl'

import ResetPasswordForm from '@/components/forms/reset-password/reset-password-form'
import { cn } from '@/lib/utils'

export default function ResetPasswordPage() {
  const t = useTranslations('pages.forgot-password')
  return (
    <div className={cn('flex w-full flex-col items-center space-y-5')}>
      <ResetPasswordForm />
      <div className="flex items-center justify-end gap-2 text-sm">
        <Link
          href={'/login'}
          className="font-semibold text-zinc-600 underline hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {t('back-to-login')}
        </Link>
      </div>
    </div>
  )
}
