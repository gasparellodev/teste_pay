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
      d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M14.9994 15L9 9M9.00064 15L15 9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const CancelCircleIcon = memo(SvgComponent)
export default CancelCircleIcon
