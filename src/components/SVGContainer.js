import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { fullView, zoomSpeed } from '../constants'

// Whenever the zoom state is changed, it will trigger a side effect here that will animate the svg's viewbox attribute. The SVG is selected in the DOM with a useRef hook.

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