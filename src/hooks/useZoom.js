import { useState } from 'react'
import {fullView} from '../constants'
// Custom hook for zooming along a linear path. Called at the top level of the application so that all components have access to a shared zoom value 
// Also returns a navigate function that is called on click events. Accepts three params: the current viewbox (for entering an area), the previous viewbox (for leaving an area) and a transiton animation (usually a fadeIn)

const useZoom = () => {
  const [zoom, setZoom] = useState(fullView)

  const navigate = (currentLevel, previousLevel, transition) => {
    if (zoom===currentLevel) {
      setZoom(previousLevel)
      transition.reverse()
    } else { 
      setZoom(currentLevel)
    }
  }

  return [navigate, zoom]
}

export default useZoom