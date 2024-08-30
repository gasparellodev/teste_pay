'use client'
import { motion } from 'framer-motion'
import * as React from 'react'
import { memo, SVGProps } from 'react'

import { cn } from '@/lib/utils'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <motion.svg
    whileHover={{ scale: 1.1, rotate: 10 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('', props.className)}
  >
    <path
      d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </motion.svg>
)
const SunIcon = memo(SvgComponent)
export default SunIcon