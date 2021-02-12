import { useRef, useState, useEffect } from 'react'

// Explain logic of app by walking through creation of specific functionality/logic

// Examples examples examples

// Ok I'm pretty proud of this one. The way gsap normally works is you define a timeline as a series of steps, each with a target DOM element and an animation. That doesnt really work with React, because React is not designed to allow direct access to the DOM. It instead uses a virtual dom for optimized re-rendering. If we tried to use GSAP normally, we would have to use a useRef hook to capture the DOM elements that we're creating with JSX, then try to attach a GSAP timeline to that captured element. However, doing so at the top level of a React component will re-create the timeline object each time the component is re-rendered. And by design, React components re-render often. We want GSAP to be able to do its own thing, separate from React, because it has a lot of great ways to optimize rendering on its own, and it provides a really convenient API for controlling animations. In order to easily use GSAP in a React context, I wrote this hook that incorporates three bread-and-butter React hooks into one so we don't muck up individual components with repetitive bulky code.

// We pass in an array of animations that we want an element to have. Remember, its best to think of these animations as factories that produce GSAP timeline objects.
const useTimelines = (animations) => {
  // We create a 'ref', which will not change when the app is re-rendered. 
  const ref = useRef()

  // An empty array will hold the GSAP timelines, which we can use in an event-driven way.
  const [timelines, setTimelines] = useState([])

  // We need to wait for the real (not virtual) DOM to render before creating the timelines. This effect hook will fire when the ref changes and only create the timelines when the ref has a 'current' value
  useEffect(() => {
    if (ref.current) {
      // An array of timelines is created by calling the animation factory on the element in the DOM that the ref is attached to. Each timeline object has the same name as the function that created it.
      const updatedTimelines = animations.map(animation=> (
        {[animation.name]: animation(ref.current)}
        )
      )
      // We want a controller for the timelines so we convert the array to an object. Now, if we want to pull the lever by clicking it, we can say "leverTimelines.pullLever.restart()"
      setTimelines(Object.assign(...updatedTimelines))
    }
  }, [ref, animations]) 

  // We return two things: a ref tag we can stick onto a piece of JSX, and the timelines controller
  return [ref, timelines]
}

export default useTimelines