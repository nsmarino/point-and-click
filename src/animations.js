import gsap from 'gsap'

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

