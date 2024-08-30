import * as React from 'react'
import { memo, SVGProps } from 'react'

import { cn } from '@/lib/utils'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', props.className)}
    {...props}
  >
    <g clipPath="url(#clip0_148_2035)">
      <path
        d="M3 0H9V24H3C1.344 24 0 22.208 0 20V4C0 1.792 1.344 0 3 0Z"
        fill="#2B6519"
      />
      <path
        d="M20.6316 24L8 24L8 0L20.6316 0C22.4909 0 24 1.792 24 4L24 20C24 22.208 22.4909 24 20.6316 24Z"
        fill="#EA3323"
      />
      <path
        opacity={0.15}
        d="M23 0H1C-1.209 0 -3 1.791 -3 4V20C-3 22.209 -1.209 24 1 24H23C25.209 24 27 22.209 27 20V4C27 1.791 25.209 0 23 0ZM26 20C26 21.654 24.654 23 23 23H1C-0.654 23 -2 21.654 -2 20V4C-2 2.346 -0.654 1 1 1H23C24.654 1 26 2.346 26 4V20Z"
        fill="black"
      />
      <path
        d="M8 16C10.2091 16 12 14.2091 12 12C12 9.79086 10.2091 8 8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16Z"
        fill="#FFFF55"
      />
      <path
        d="M10.0496 10.0232L5.94962 10.0184V12.7632C5.95282 13.3008 6.16641 13.8088 6.55201 14.1928C6.94481 14.584 7.45762 14.8 7.99602 14.8C8.54322 14.8 9.05841 14.5864 9.44641 14.2C9.83441 13.8128 10.0488 13.2992 10.0488 12.7536V10.0232H10.0496Z"
        fill="#EA3323"
      />
    </g>
    <defs>
      <clipPath id="clip0_148_2035">
        <rect width={24} height={24} rx={12} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
const PtFlagIcon = memo(SvgComponent)
export default PtFlagIcon
