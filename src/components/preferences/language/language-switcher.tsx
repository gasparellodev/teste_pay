import { useLocale } from 'next-intl'

import NextIntlClientProvider from '@/contexts/next-intl-client-provider'

import { LanguageSwitcherSelect } from './language-switcher-select'

export default function LanguageSwitcher() {
  const locale = useLocale()

  return (
    <NextIntlClientProvider namespace={'common'}>
      <LanguageSwitcherSelect defaultValue={locale} />
    </NextIntlClientProvider>
  )
}
