import { useEffect, useMemo, useState } from 'react'

const useOnScreen = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIsIntersecting(entry.isIntersecting)
  ), [])

  useEffect(() => {
    const current = ref.current
    if (!current) {
      return
    }

    observer.observe(current)

    return () => observer.unobserve(current)
  }, [ref, observer])

  return isIntersecting
}

export default useOnScreen