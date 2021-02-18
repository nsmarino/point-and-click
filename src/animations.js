import gsap from 'gsap'

// GSAP timelines are basically objects that can be paused, played, restarted, et cetera. They target parts of the DOM. This doesnt work with react at all. If we defined a timeline in the top level of a react component, it would (a) be re-created every time the component renders, which is to say, often, and (b) be unable to access DOM elements easily because React works with a virtual DOM

// For this reason, these 'animations' are basically factory functions that return a gsap timeline when given a target. This allows us to hide away the basic design incompatibilities of React and GSAP in the useTimelines hook, while still having full access to most of GSAP's features.

export const openDoor = (target) => 
  gsap.timeline({paused: true})
    .to(target, {attr: {height: 35}, duration: 2})

export const showLevel = (target) => 
  gsap.timeline({paused:true})
    .set(target, {display: 'block'})
    .to(target, {opacity: 1, duration: 2})

export const showChapter = (target) => 
  gsap.timeline({paused:true})
    .set(target, {display: 'block'})
    .to(target, {opacity: 1, duration: 2})

export const pullLever = (target) => 
  gsap.timeline({paused: true})
    .to(target.querySelector('#shaft'), {rotation: 45, transformOrigin: '50% 100%', duration: 1})
    .to(target.querySelector('#shaft'), {rotation: -36, transformOrigin: '50% 100%', duration: 0.5})

export const turnGear = (target) => 
  gsap.timeline({paused: true, repeat: -1})
    .to(target, {rotation: 360, transformOrigin: '50% 50%', duration: 2, ease:'none'})

