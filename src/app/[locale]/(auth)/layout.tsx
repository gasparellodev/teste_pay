import { redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'

import { CoverAuth } from '@/components/features/auth/cover'
import { LogoAuth } from '@/components/features/auth/logo-auth'
import LanguageSwitcher from '@/components/preferences/language/language-switcher'
// import { serverAuth } from '@/lib/auth'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const t = await getTranslations('common.legal')
  // const session = await serverAuth()
  // if (session) {
  //   redirect('/dashboard')
  // }

  return (
    <div className="relative flex h-screen px-3">
      <div className="container relative flex flex-1 flex-col items-center justify-between pt-6">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-6">
          <LogoAuth />
          {children}
        </div>
        <footer className="flex w-full flex-col items-center justify-between gap-4 py-4 md:flex-row">
          <span className="text-sm text-muted-foreground">
            {t.rich('copyright', {
              date: () => <span>{new Date().getFullYear()}</span>,
            })}
          </span>
          <LanguageSwitcher />
        </footer>
      </div>
      <CoverAuth />
    </div>
  )
}
