import { motion } from 'framer-motion'
import { useFadeUp } from '../hooks/useFadeUp'

export default function FadeUp({ children, delay = 0, className = '', threshold = 0.1 }) {
  const { ref, inView } = useFadeUp(threshold)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
