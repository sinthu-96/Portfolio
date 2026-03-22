import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function useScrollFade(threshold = 0.15) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true })
  return { ref, inView }
}

export function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const dirClass = {
    up: 'fade-in',
    left: 'fade-in-left',
    right: 'fade-in-right',
  }[direction] || 'fade-in'

  return (
    <div
      ref={ref}
      className={`${dirClass} ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
