import { useEffect, useState, useRef } from "react";

export default function useIntersectionObserver () {
  const [isInViewPort, setIsInViewPort] = useState(false)

  const fromRef = useRef()
  
  useEffect(() => {
    const element = fromRef.current

    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsInViewPort(true)
      }
      else {
        setIsInViewPort(false)
      }
    }
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '-25%'
    })

    if (element) observer.observe(element)

    return () => observer && observer.disconnect()
  }, [fromRef])

  return { isInViewPort, fromRef }

}