import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { fullView, zoomSpeed } from '../constants'

const SVGContainer = ({children, zoom}) => {
  const containerRef=useRef()
  
  useEffect(() => {
    gsap.to(containerRef.current, {
      attr:{viewBox:zoom}, 
      duration: zoomSpeed,
    })
  }, [zoom])

  return (
  <svg 
    ref={containerRef}
    viewBox={fullView}
    preserveAspectRatio="xMidYMid meet"
    style={{background: 'white', width: '75vmin'}}
  >
    {children}
  </svg>
  )
}

export default SVGContainer