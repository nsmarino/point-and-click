import useTimelines from '../hooks/useTimelines'
import { useEffect } from 'react'
import { fullView, levelOneView } from '../constants'
import { pullLever, showLevel } from '../animations'

// The animations for each piece of the level are grouped into an array outside of the component so that they do not re-trigger the useTimelines hook when state changes
const leverAnimations = [pullLever]
const levelAnimations = [showLevel]

const LevelOne = ({navigate, zoom, unlock}) => {
  // The useTimelines hook gives us a ref to attach to the piece we want to animate, and a timelines controller so we can start and stop its animations.
  const [leverRef, leverTimelines] = useTimelines(leverAnimations)
  const [levelRef, { showLevel }] = useTimelines(levelAnimations)

  // The details of each scene fade into view when the scene is navigated to. Im keeping this logic here instead of in the useTimelines hook because I want menhirs to unlocked locations to serve as 'fast travel' signposts.
  useEffect(() => {
    if (zoom===levelOneView) showLevel.restart()
  }, [zoom, showLevel])

  // Clicking the lever triggers a 'pull lever' animation and unlocks the next area
  const handleLeverClick = () => {
      leverTimelines.pullLever.restart()
      unlock({two: true})
  }

  return (
  <>
    <g className='level' ref={levelRef}>
      
      <g id="leverLevelOne" ref={leverRef} onClick={handleLeverClick} className='click'>
        <polygon className="shaft" points="3921.18 4025.08 3877.05 3940.31 3884.02 3934.5 3926.6 4025.08 3921.18 4025.08" fill="#bcbec0" stroke="#231f20" strokeMiterlimit="10"/>
        <polygon points="3890.98 4041.19 3897.95 4017.96 3932.79 4008.97 3953.69 4017.96 3962.21 4041.19 3890.98 4041.19" fill="#bcbec0" stroke="#231f20" strokeMiterlimit="10"/>
      </g>
    </g>
    {/* We use the navigate function passed down from useZoom to say that clicking on the level One menhir toggles the view between the level one view and the full view. This toggle is animated with the showLevel timeline. */}
  <g className="click" onClick={() => navigate(levelOneView, fullView, showLevel)}>
    <polygon id="menhirOne" points="3946.38 3997.56 3975.79 3632.85 4016.97 3585.79 4081.68 3562.26 4105.21 3621.09 4134.62 3997.56 4040.5 4032.85 3987.56 4032.85 3946.38 3997.56" fill="#bcbec0" stroke="#231f20" strokeMiterlimit="10" strokeWidth="5"/>
    <g id="runes">
    <polygon points="3986.4 3740.53 4013.11 3753.89 4010.08 3754.71 3993.18 3759.31 4021.05 3771.31 3973.05 3788.74 4016.02 3771.89 3990.86 3758.73 4009.63 3753.5 3986.4 3740.53" fill="#231f20"/>
    <path d="M4019.52,3750l18-1.16-1.06,1.84-16.94,29.52s2.71,14.13,9,6.77,5.51-14.32,5.51-14.32l-.58,9.68-7.16,7.17h-3.1l-4.64-5.82v-4.06l16.64-29.42Z" transform="translate(2.5 0.5)" fill="#231f20"/>
    <polygon points="4045.63 3753.5 4065.95 3752.34 4064.98 3753.5 4045.63 3753.5" fill="#231f20"/>
    <polygon points="4046.4 3758.53 4064.98 3759.5 4047.57 3797.56 4062.86 3760.86 4046.4 3758.53" fill="#231f20"/></g>
  </g>
 </>
  )
}

export default LevelOne
