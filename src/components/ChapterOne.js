import useTimelines from '../hooks/useTimelines'
import { useState } from 'react'
import { chapterOneView} from '../constants'
import { pullLever, turnGear, showChapter } from '../animations'

// The animations for each piece of the level are grouped into an array outside of the component so that they do not re-trigger the useTimelines hook when state changes
const chapterAnimations = [showChapter]
const gearAnimations = [turnGear]
const leverAnimations = [pullLever]

const ChapterOne = ({enter, leave}) => {
  const [gearsTurning, setGearsTurning] = useState(false)
  // The useTimelines hook gives us a ref to attach to the piece we want to animate, and a timelines controller so we can start and stop its animations.
  // const [leverRef, leverTimelines] = useTimelines(leverAnimations)
  const [chapterRef, { showChapter }] = useTimelines(chapterAnimations)
  const [bigGearRef, bigGearTimelines] = useTimelines(gearAnimations)
  const [smallGearRef, smallGearTimelines] = useTimelines(gearAnimations)
  const [leverRef, { pullLever }] = useTimelines(leverAnimations)

  const handleLeverClick = () => {
      pullLever.restart()
      pullLever.eventCallback("onComplete", () => {
        if(gearsTurning) {
          bigGearTimelines.turnGear.pause()
          smallGearTimelines.turnGear.pause()
        }
        if (!gearsTurning) {
          bigGearTimelines.turnGear.play()
          smallGearTimelines.turnGear.play()
        }
        setGearsTurning(!gearsTurning)
      });
  }

  return (<>
  <text onClick={() => enter(chapterOneView, showChapter)}class="nav" transform="translate(3680.29 7617.9)" font-size="400" fill="#231f20" font-family="CourierNewPSMT, Courier New">CHAPTER ONE</text>
<g id="chapterOne" class="chapter" ref={chapterRef}>

<path id="sky" d="M5757.5,7537.5h-75v-75h75Z" transform="translate(0.5 0.5)" fill="#fee5d6" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.25"/>

<polygon id="mountain" points="5683 7504.56 5692.85 7488.18 5699.3 7486.57 5708.46 7486.57 5717.88 7475.97 5719.83 7470.03 5722.54 7466.04 5725.6 7463.58 5727.97 7465.79 5732.13 7470.96 5734.33 7469.27 5736.45 7469.35 5739.42 7472.06 5744.94 7479.02 5749.77 7485.89 5752.83 7489.37 5755.2 7490.47 5758 7491.58 5758 7538 5683 7538 5683 7504.56" fill="#b09586" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.25"/>

<circle id="sun" cx="5694.67" cy="7471.85" r="5.3" fill="#fff" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.25"/>

<polygon id="hill" points="5683 7522.71 5699.85 7519.76 5715.41 7517.03 5729.24 7514.57 5743.32 7513.72 5749.35 7513.12 5754.18 7513.12 5758 7513.12 5758 7538 5683 7538 5683 7522.71" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.25"/>

<g id="machine">

<polygon id="tallPost" points="5716.25 7516.88 5716.25 7500.5 5714.2 7500.5 5712.83 7517.48 5716.25 7516.88" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.25"/>

<polygon id="shortPost" points="5729.24 7514.57 5729.24 7503.41 5724.01 7503.41 5723.3 7515.62 5729.24 7514.57" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.25"/>

<line id="bottomWire" x1="5714.23" y1="7501.58" x2="5725.87" y2="7507.27" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/>

<line id="topWire" x1="5715.24" y1="7500.57" x2="5727.22" y2="7504.31" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/>

<g id="bigGear" ref={bigGearRef}><rect x="5726.01" y="7502.39" width="0.52" height="7.13" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><rect x="5725.51" y="7501.89" width="0.52" height="7.13" transform="translate(-3629.62 6247.53) rotate(-45)" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><rect x="5725.51" y="7501.89" width="0.52" height="7.13" transform="translate(6984.7 -1849.94) rotate(45)" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><rect x="5725.51" y="7501.89" width="0.52" height="7.13" transform="translate(-1779.18 13231.72) rotate(-90)" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><circle cx="5726.27" cy="7505.83" r="2.17" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><circle cx="5726.27" cy="7505.95" r="0.95" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/></g>

<g id="smallGear" ref={smallGearRef}><rect x="5715.12" y="7499.98" width="0.24" height="3.32" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><rect x="5714.62" y="7499.48" width="0.24" height="3.32" transform="translate(-3629.8 6238.46) rotate(-45)" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><rect x="5714.62" y="7499.48" width="0.24" height="3.32" transform="translate(6978.41 -1843.4) rotate(45)" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><rect x="5714.62" y="7499.48" width="0.24" height="3.32" transform="translate(-1785.9 13216.38) rotate(-90)" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><circle cx="5715.24" cy="7501.58" r="1.01" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/><circle cx="5715.24" cy="7501.64" r="0.44" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.1"/></g></g>

<g id="Lever" class="click" ref={leverRef} onClick={handleLeverClick}>
<rect id="shaft" x="5739.3" y="7501.88" width="0.68" height="11.71" stroke-width="0.25" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" transform="translate(-3353.88 4937.55) rotate(-36.82)"/>
<rect id="box" x="5739.42" y="7510.49" width="8.99" height="4.58" fill="#e8c4b1" stroke="#231f20" stroke-miterlimit="10" stroke-width="0.25"/>
</g>

<text onClick={() => leave(showChapter)} transform="translate(5684.88 7535.7)" font-size="3" fill="#231f20" font-family="MyriadPro-Regular, Myriad Pro" class="click">-back</text>
</g>
</>
  )
}

export default ChapterOne