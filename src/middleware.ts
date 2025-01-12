import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pt-pt', 'pt-br', 'en-us'],

  // Used when no locale matches
  defaultLocale: 'pt-br',
  localePrefix: 'as-needed',
})

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // // Match all pathnames within `/users`, optionally with a locale prefix
    // "/([\\w-]+)?/users/(.+)",
  ],
}
