import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('common.legal')

  const links = [
    {
      label: t('links.terms-of-products'),
      href: '#',
    },
    {
      label: t('links.terms-of-service'),
      href: '#',
    },
    {
      label: t('links.privacy-policy'),
      href: '#',
    },
  ]
  return (
    <div className="z-20 w-full border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container mx-auto flex h-[55px] flex-col items-center justify-center md:flex-row md:justify-between">
        <p className="text-left text-xs leading-loose text-zinc-600 dark:text-zinc-400">
          {t.rich('copyright', {
            date: () => <span>{new Date().getFullYear()}</span>,
          })}
        </p>
        <div className="flex items-center gap-3">
          {links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className="text-xs text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
