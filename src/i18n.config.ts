import { Pathnames } from 'next-intl/routing'

export const locales = ['pt-br', 'en-us', 'pt-pt'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    'pt-br': '/pathnames',
    'en-us': '/pathnames',
    'pt-pt': '/pathnames',
  },
} satisfies Pathnames<typeof locales>

// Use the default: `always`
export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames
