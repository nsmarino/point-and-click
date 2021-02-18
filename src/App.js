import useZoom from './hooks/useZoom'
import SVGContainer from './components/SVGContainer'
import ChapterOne from './components/ChapterOne'
import Title from './components/Title'
import './App.css'

// The game is a single svg image with different 'levels' that you access by clicking
// on menhirs. Clicking a menhir adjusts the svg's viewbox to 'zoom in' using gsap
// to control the transition.
// The basic idea is that gsap is used for animation and react is used for 
// state management and conditional rendering. GSAP is not designed for react, especially react of the hooks variety, so a custom useTimelines hook abstracts away incompatibilities.

const App = () => {

  // This custom hook returns the current zoom level, which is used by SVGContainer
  // to set the viewbox. It also returns a function called navigate that allows you
  // to set linear pathways through the levels. You can also provide a transition
  // animation for use when switching between levels.
  const [enter, leave, zoom] = useZoom()

  return (
  <main>

    <SVGContainer zoom={zoom}>
      <Title />  
      <ChapterOne enter={enter} leave={leave} zoom={zoom} />  
    </SVGContainer>
  </main>
  )
}

export default App

// React for conditional rendering and state management
// Greensock for animations
