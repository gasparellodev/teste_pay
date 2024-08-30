'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ /** y: -7, */ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeIn', duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}
