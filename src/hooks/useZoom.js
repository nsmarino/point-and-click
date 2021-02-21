import { useState } from 'react'
import {fullView} from '../constants'

const useZoom = () => {
  const [zoom, setZoom] = useState(fullView)

  const enter = (chapter, transition) => {
    setZoom(chapter)
    transition.restart()
  }

  const leave = (transition) => {
    setZoom(fullView)
    transition.reverse()
  }

  return [enter, leave, zoom]
}

export default useZoom