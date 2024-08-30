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
    <g clipPath="url(#clip0_147_2028)">
      <path
        d="M23 0H1C-1.20914 0 -3 1.79086 -3 4V20C-3 22.2091 -1.20914 24 1 24H23C25.2091 24 27 22.2091 27 20V4C27 1.79086 25.2091 0 23 0Z"
        fill="#459A45"
      />
      <path
        opacity={0.15}
        d="M23 0H1C-1.209 0 -3 1.791 -3 4V20C-3 22.209 -1.209 24 1 24H23C25.209 24 27 22.209 27 20V4C27 1.791 25.209 0 23 0ZM26 20C26 21.654 24.654 23 23 23H1C-0.654 23 -2 21.654 -2 20V4C-2 2.346 -0.654 1 1 1H23C24.654 1 26 2.346 26 4V20Z"
        fill="black"
      />
      <path d="M2 12L12 18.3857L22 12L12 5.61432L2 12Z" fill="#FEDF00" />
      <path
        d="M12 15.9911C14.2042 15.9911 15.9911 14.2042 15.9911 12C15.9911 9.7958 14.2042 8.00894 12 8.00894C9.7958 8.00894 8.00894 9.7958 8.00894 12C8.00894 14.2042 9.7958 15.9911 12 15.9911Z"
        fill="#0A2172"
      />
      <path
        d="M10.4036 10.8027C9.60776 10.8027 8.84068 10.9216 8.11031 11.1292C8.04805 11.4085 8.00974 11.6959 8.00894 11.9936C8.76245 11.7422 9.56625 11.6001 10.4028 11.6001C12.4175 11.6001 14.247 12.3951 15.6063 13.6818C15.7277 13.4216 15.8266 13.1502 15.8905 12.8629C14.4186 11.5825 12.5021 10.8011 10.4028 10.8011L10.4036 10.8027Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_147_2028">
        <rect width={24} height={24} rx={12} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
const BrFlagIcon = memo(SvgComponent)
export default BrFlagIcon
