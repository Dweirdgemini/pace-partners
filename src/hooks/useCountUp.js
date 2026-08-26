import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 2200) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let start = null
    function tick(ts) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) ref.current = requestAnimationFrame(tick)
    }
    ref.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(ref.current)
  }, [target, duration])

  return value
}
