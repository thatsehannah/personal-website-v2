import { useState, useEffect } from "react"

export const useIntersection = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false)

  const { threshold = 0.1, root = null, rootMargin = "0px" } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold, root, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold, root, rootMargin])

  return isVisible
}
