document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".img-me1"),o=document.querySelectorAll(".img-me2"),t=document.querySelectorAll(".img-me3"),r=document.querySelector(".section1");gsap.fromTo(e,{y:"-110%"},{y:0,duration:1,scrollTrigger:{trigger:r,start:"top 60%",end:"top 20%",toggleActions:"play none none reverse"}}),gsap.fromTo(o,{x:"-110%"},{x:0,duration:1,scrollTrigger:{trigger:r,start:"top 20%",end:"top 20%",toggleActions:"play none none reverse"}}),gsap.fromTo(t,{y:"110%"},{y:0,duration:1,scrollTrigger:{trigger:r,start:"top 40%",end:"top 20%",toggleActions:"play none none reverse"}}),gsap.fromTo(".me-1 h2",{opacity:0,x:"-110%"},{opacity:1,x:0,duration:1.5,scrollTrigger:{trigger:r,start:"top 20%",end:"top 20%",toggleActions:"play none none reverse"}}),gsap.fromTo(".me-1 p",{opacity:0,x:"-110%"},{opacity:1,x:0,duration:1.5,scrollTrigger:{trigger:r,start:"top 20%",end:"top 20%",toggleActions:"play none none reverse"}})}));