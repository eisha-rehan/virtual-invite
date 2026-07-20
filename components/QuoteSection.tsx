'use client'

import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'

export default function QuoteSection() {
  return (
    <section className="px-8 py-24 flex flex-col items-center text-center">
      <SectionReveal>
        <div className="relative max-w-[300px] mx-auto">

          {/* Animated top bracket line — draws left to right */}
          <motion.div
            className="absolute -top-2 left-0 h-px bg-gradient-to-r from-transparent via-[#B8D8EE] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '100%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden="true"
          />
          {/* Top-left corner tick */}
          <motion.div
            className="absolute -top-2 left-0 w-px bg-[#B8D8EE]"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 12, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
            aria-hidden="true"
          />
          {/* Top-right corner tick */}
          <motion.div
            className="absolute -top-2 right-0 w-px bg-[#B8D8EE]"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 12, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
            aria-hidden="true"
          />

          {/* Large animated quote mark */}
          <motion.div
            className="absolute -top-4 -left-2 font-serif leading-none select-none pointer-events-none"
            style={{ fontSize: 80, color: '#B8D8EE', opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            aria-hidden="true"
          >
            &ldquo;
          </motion.div>

          {/* Quote text */}
          <blockquote className="relative z-10 pt-10 pb-4 px-4">
            <motion.p
              className="font-serif text-[26px] italic text-[#2C4A5A] leading-snug"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Beginning of a beautiful forever.
            </motion.p>
          </blockquote>

          {/* Closing quote mark */}
          <motion.div
            className="absolute -bottom-4 right-0 font-serif leading-none select-none pointer-events-none"
            style={{ fontSize: 80, color: '#F0C8DC', opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            aria-hidden="true"
          >
            &rdquo;
          </motion.div>

          {/* Animated bottom bracket line */}
          <motion.div
            className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-transparent via-[#F0C8DC] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '100%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            aria-hidden="true"
          />
          {/* Bottom corner ticks */}
          <motion.div
            className="absolute -bottom-2 left-0 w-px bg-[#F0C8DC]"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 12, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.4 }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute -bottom-2 right-0 w-px bg-[#F0C8DC]"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 12, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.4 }}
            aria-hidden="true"
          />

          {/* Twinkling ornament below */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            aria-hidden="true"
          >
            <motion.span
              style={{ color: '#B8D8EE', fontSize: 11 }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0 }}
            >✦</motion.span>
            <motion.span
              style={{ color: '#F0C8DC', fontSize: 14 }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.7 }}
            >✦</motion.span>
            <motion.span
              style={{ color: '#B8D8EE', fontSize: 11 }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: 1.4 }}
            >✦</motion.span>
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  )
}
