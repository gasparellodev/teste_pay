import * as React from 'react'
import { memo, SVGProps } from 'react'

import { cn } from '@/lib/utils'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', props.className)}
    {...props}
  >
    <path
      d="M20 11.9998L4 11.9998"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ArrowRightLongIcon = memo(SvgComponent)
export default ArrowRightLongIcon
