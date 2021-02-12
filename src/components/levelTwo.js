import { useEffect } from 'react'
import useTimelines from '../hooks/useTimelines'
import { showLevel, pullLever, openDoor } from '../animations'
import { levelOneView, levelTwoView } from '../constants'

const levelAnimations = [showLevel]
const leverAnimations = [pullLever]
const doorAnimations = [openDoor]

const LevelTwo = ({ navigate, zoom }) => {
  const [levelRef, {showLevel}] = useTimelines(levelAnimations)
  const [doorRef, doorTimelines] = useTimelines(doorAnimations)
  const [leverRef, leverTimelines] = useTimelines(leverAnimations)

  useEffect(() => {
    if (zoom===levelTwoView) showLevel.restart()
  }, [zoom, showLevel])

  // This is something i'd like to think more about. Im calling the door opening animation just once here. That means that greensock is responsible for state management, and react isnt. Should I instead be setting a doorIsOpen variable to 'true,' and handling the animation in an effect hook? That would end up being a lot of effect hooks!
  const handleLeverClick = () => {
    leverTimelines.pullLever.restart()
    doorTimelines.openDoor.play()
  }

  return (
  <>
    <g className="level" ref={levelRef}>
      <polygon points="3681.68 3897.56 3716.97 3797.56 3716.97 3721.09 3758.15 3679.91 3805.21 3732.85 3805.21 3830.56 3858.15 3830.56 3905.21 3856.38 3905.21 3897.56 3681.68 3897.56" fill="#414042" stroke="#231f20" strokeMiterlimit="10" strokeWidth="5"/>

      <g id="leverLevelTwo" ref={leverRef} onClick={handleLeverClick} className='click'>
        <polygon className="shaft" points="3724.56 3894.92 3717.34 3881.05 3718.48 3880.1 3725.45 3894.92 3724.56 3894.92" fill="#bcbec0" stroke="#231f20" strokeMiterlimit="10" strokeWidth="0.5"/>
        <polygon points="3719.62 3897.56 3720.76 3893.76 3726.46 3892.29 3729.88 3893.76 3731.27 3897.56 3719.62 3897.56" fill="#bcbec0" stroke="#231f20" strokeMiterlimit="10" strokeWidth="0.5"/>
      </g>

      <rect id="door" ref={doorRef} x="3802.5" y="3863.35" width="15.96" height="0" fill="#f1f2f2" stroke="#231f20" strokeMiterlimit="10" strokeWidth="0.5"/>
    </g>

    <g id="MenhirTwo" onClick={() => navigate(levelTwoView, levelOneView, showLevel)} className={'click'}>
      <polygon id="stone" points="3868.63 3895.81 3871.44 3861.02 3875.37 3856.53 3881.54 3854.29 3883.78 3859.9 3886.59 3895.81 3877.61 3899.18 3872.56 3899.18 3868.63 3895.81" fill="#bcbec0" stroke="#231f20" strokeMiterlimit="10"/>
        <g id="runes"><polygon points="3872.45 3871.29 3875 3872.57 3874.71 3872.65 3873.1 3873.08 3875.76 3874.23 3871.18 3875.89 3875.28 3874.28 3872.88 3873.03 3874.67 3872.53 3872.45 3871.29" fill="#231f20"/>
        <path d="M3873.35,3871.74l1.72-.11-.11.18-1.61,2.81s.26,1.35.86.65a1.93,1.93,0,0,0,.52-1.37l-.05.93-.69.68h-.29l-.44-.55v-.39l1.58-2.81Z" transform="translate(2.5 0.5)" fill="#231f20"/>
        <polygon points="3878.1 3872.53 3880.04 3872.42 3879.95 3872.53 3878.1 3872.53" fill="#231f20"/>
        <polygon points="3878.18 3873.01 3879.95 3873.1 3878.28 3876.73 3879.74 3873.23 3878.18 3873.01" fill="#231f20"/></g>
    </g>
  </>
  )
}

export default LevelTwo
