import { useEffect, useState } from 'react'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const className = visible ? 'floating-cta floating-cta-visible' : 'floating-cta'

  return (
    <a
      href="#contact"
      className={className}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Interested? Contact us
    </a>
  )
}