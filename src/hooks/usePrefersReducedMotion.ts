import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function getInitialPreference() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(QUERY).matches
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(getInitialPreference)

  useEffect(() => {
    const media = window.matchMedia(QUERY)
    const onChange = () => setReduced(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return reduced
}
