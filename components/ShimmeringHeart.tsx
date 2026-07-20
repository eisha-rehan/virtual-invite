'use client'

import { motion } from 'framer-motion'

const sizes = {
  sm: 'text-2xl',
  md: 'text-[32px]',
  lg: 'text-[52px]',
}

export default function ShimmeringHeart({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return (
    <motion.span
      className={`inline-block select-none leading-none ${sizes[size]}`}
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    >
      <span className="shimmer-text">♡</span>
    </motion.span>
  )
}
