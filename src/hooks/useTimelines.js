import { useRef, useState, useEffect } from 'react'

const useTimelines = (animations) => {
  const ref = useRef()

  const [timelines, setTimelines] = useState([])

  useEffect(() => {
    if (ref.current) {
      const updatedTimelines = animations.map(animation=> (
        {[animation.name]: animation(ref.current)}
        )
      )
      setTimelines(Object.assign(...updatedTimelines))
    }
  }, [ref, animations]) 

  return [ref, timelines]
}

export default useTimelines