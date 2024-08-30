import * as React from 'react'
import { memo, SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    {...props}
  >
    <path
      d="M16.4407 21.3478L16.9929 20.6576C17.4781 20.0511 18.5085 20.1 18.9184 20.7488C19.4114 21.5295 20.6292 21.3743 20.9669 20.6562C20.9845 20.6189 20.9405 20.7123 20.9781 20.3892C21.0156 20.0661 21 19.9923 20.9687 19.8448L19.0456 10.7641C18.5623 8.48195 18.3206 7.34086 17.4893 6.67043C16.6581 6 15.4848 6 13.1384 6H10.8616C8.51517 6 7.34194 6 6.51066 6.67043C5.67937 7.34086 5.43771 8.48195 4.95439 10.7641L3.0313 19.8448C3.00004 19.9923 2.98441 20.0661 3.02194 20.3892C3.05946 20.7123 3.01554 20.6189 3.0331 20.6562C3.37084 21.3743 4.58856 21.5295 5.08165 20.7488C5.49152 20.1 6.52187 20.0511 7.00709 20.6576L7.55934 21.3478C8.25514 22.2174 9.70819 22.2174 10.404 21.3478L10.4908 21.2392C11.2291 20.3165 12.7709 20.3165 13.5092 21.2392L13.596 21.3478C14.2918 22.2174 15.7449 22.2174 16.4407 21.3478Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <path
      d="M2.48336 9.5C1.89805 8.89199 2.00824 8.10893 2.00824 6.15176C2.00824 4.1946 2.00824 3.21602 2.59355 2.60801C3.17886 2 4.1209 2 6.00497 2L17.9952 2C19.8792 2 20.8213 2 21.4066 2.60801C21.9919 3.21602 21.9919 4.1946 21.9919 6.15176C21.9919 8.10893 22.1014 8.89199 21.5161 9.5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M12 10H9"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14L8 14"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const InvoiceIcon = memo(SvgComponent)
export default InvoiceIcon
