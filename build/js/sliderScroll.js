document.addEventListener("DOMContentLoaded",()=>{gsap.registerPlugin(ScrollTrigger);const e=document.querySelector(".sticky"),t=(document.querySelector(".sticky-header"),document.querySelector(".slider-wrapper")),n=document.querySelectorAll(".slide"),r=5*window.innerHeight;ScrollTrigger.create({trigger:e,start:"top top",end:`+=${r}px`,pin:!0,pinSpacing:!0,onUpdate:e=>{const r=-e.progress*(t.offsetWidth-window.innerWidth);gsap.set(t,{x:r}),n.forEach(e=>{const t=e.getBoundingClientRect(),n=(t.left+t.right)/2-window.innerWidth/2;let r,i;n>0?(r=Math.min(1.1,1+n/window.innerWidth),i=500*(r-1)):(r=Math.max(.7,1-Math.abs(n)/window.innerWidth),i=0),gsap.set(e,{scale:r,x:i})})}})});