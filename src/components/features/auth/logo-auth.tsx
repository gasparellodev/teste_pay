import Image from 'next/image'

import { cn } from '@/lib/utils'

import logo from '/public/logo.png'

type Props = React.HTMLAttributes<HTMLDivElement>

export function LogoAuth({ className, ...props }: Props) {
  return (
    <div
      className={cn('flex h-16 items-center justify-normal gap-3', className)}
      {...props}
    >
      <Image
        src={logo}
        alt="Logo Iluckpay"
        className="h-full w-fit"
        loading="lazy"
      />
    </div>
  )
}
