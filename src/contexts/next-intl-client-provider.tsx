import pick from 'lodash/pick'
import {
  NextIntlClientProvider as NextIntlRootClientProvider,
  useMessages,
} from 'next-intl'
import React from 'react'

type Props = {
  namespace: string | string[]
  children: React.ReactNode
} & React.ComponentProps<typeof NextIntlRootClientProvider>

export default function NextIntlClientProvider({
  children,
  namespace,
  ...props
}: Props) {
  const messages = useMessages()

  // Always include the common namespace for DRY components like table, error fetching, etc.
  const namespaces = (
    Array.isArray(namespace) ? namespace : [namespace]
  ).concat('common')

  return (
    <NextIntlRootClientProvider
      messages={
        // Only provide the minimum of messages
        pick(messages, namespaces)
      }
      {...props}
    >
      {children}
    </NextIntlRootClientProvider>
  )
}
