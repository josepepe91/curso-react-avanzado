import { useEffect, useRef, useState } from 'react'

export const useNearScreen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    // Se verifica que el objeto window contenga el feature IntersectionObserver, si no lo tiene lo carga del polyfill
    // y lo devuelve en la promesa. En el caso de chrome no lo necesita, pero en el caso de Edge, si.
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
