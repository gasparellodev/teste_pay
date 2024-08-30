import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import { Navbar } from './navbar'

interface ContentLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  children: React.ReactNode
}

export function ContentLayout({
  title,
  children,
  ...props
}: ContentLayoutProps) {
  return (
    <div className={cn('h-full flex-1', props.className)} {...props}>
      <Navbar title={title} />
      <div className="container h-full flex-1 px-3 pb-8 pt-8 sm:px-6">
        {children}
      </div>
    </div>
  )
}
