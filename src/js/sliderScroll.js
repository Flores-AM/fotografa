document.addEventListener("DOMContentLoaded", () => {
    // const lenis = new Lenis();
    // lenis.on("scroll", ScrollTrigger.update);
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000);
    // });
    // gsap.ticker.lagSmoothing(0);
  
    gsap.registerPlugin(ScrollTrigger);
  
    const stickySection = document.querySelector(".sticky");
    const stickyHeader = document.querySelector(".sticky-header");
    const slider = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".slide");
    const stickyHeight = window.innerHeight * 5;
  
    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
  
        const maxTranslate = slider.offsetWidth - window.innerWidth;
        const translateX = -progress * maxTranslate;
        gsap.set(slider, { x: translateX });

        function updateScaleAndPosition() {
  slides.forEach((slide) => {
    const rect = slide.getBoundingClientRect();
    const centerPosition = (rect.left + rect.right) / 2;
    const distanceFromCenter = centerPosition - window.innerWidth / 2;

    let scale, offsetX;
    if (distanceFromCenter > 0) {
      scale = Math.min(1, 1 - distanceFromCenter / window.innerWidth);
      offsetX = (scale - 1) * 200;
    }
    //  else {
    //   scale = Math.max(
    //     0.7,
    //     1 - Math.abs(distanceFromCenter) / window.innerWidth
    //   );
    //   offsetX = 0;
    // }
      
    gsap.set(slide, { scale: scale, x: offsetX });
  });
}

updateScaleAndPosition();

      },
    });
  });
  

// let target = 0;
// let current = 0;
// let ease = 0.075;

// const slider = document.querySelector(".slider");
// const sliderWrapper = document.querySelector(".slider-wrapper");
// const slides = document.querySelectorAll(".slide");
// const projects = document.querySelector(".section2");

// let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

// function lerp(start, end, factor) {
//   return start + (end - start) * factor;
// }

// function updateScaleAndPosition() {
//   slides.forEach((slide) => {
//     const rect = slide.getBoundingClientRect();
//     const centerPosition = (rect.left + rect.right) / 2;
//     const distanceFromCenter = centerPosition - window.innerWidth / 2;

//     let scale, offsetX;
//     if (distanceFromCenter > 0) {
//       scale = Math.min(1.75, 1 + distanceFromCenter / window.innerWidth);
//       offsetX = (scale - 1) * 300;
//     } else {
//       scale = Math.max(
//         0.5,
//         1 - Math.abs(distanceFromCenter) / window.innerWidth
//       );
//       offsetX = 0;
//     }

//     gsap.set(slide, { scale: scale, x: offsetX });
//   });
// }

// function update() {
//   current = lerp(current, target, ease);

//   gsap.set(".slider-wrapper", {
//     x: -current,
//   });

//   updateScaleAndPosition();

//   requestAnimationFrame(update);
// }
// window.addEventListener("resize", () => {
//   maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
// });

// window.addEventListener("wheel", (e) => {
//   target += e.deltaY;
//   target = Math.max(0, target);
//   target = Math.min(maxScroll, target);
// });

// update();
