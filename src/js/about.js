document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todas las imágenes
  const images = document.querySelectorAll('.img-me1');
  const images2 = document.querySelectorAll('.img-me2');
  const images3 = document.querySelectorAll('.img-me3');
  const about = document.querySelector('.section1');

  // Recorre cada imagen y aplica la animación
    gsap.fromTo(images, {
      //   opacity: 0,
        y: "-110%",
      }, {
      //   opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: about,
            start: "top 60%", // La animación comienza cuando el 80% de la imagen está en la vista
            end: "top 20%",   // La animación termina cuando el 20% de la imagen está en la vista
            toggleActions: "play none none reverse" // Reproduce la animación al entrar y revierte al salir
        }
  });

    gsap.fromTo(images2, {
      //   opacity: 0,
        x: "-110%",
      }, {
      //   opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: about,
            start: "top 20%", // La animación comienza cuando el 80% de la imagen está en la vista
            end: "top 20%",   // La animación termina cuando el 20% de la imagen está en la vista
            toggleActions: "play none none reverse" // Reproduce la animación al entrar y revierte al salir
        }
  });

  gsap.fromTo(images3, {
    //   opacity: 0,
      y: "110%",
    }, {
    //   opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
          trigger: about,
          start: "top 40%", // La animación comienza cuando el 80% de la imagen está en la vista
          end: "top 20%",   // La animación termina cuando el 20% de la imagen está en la vista
          toggleActions: "play none none reverse" // Reproduce la animación al entrar y revierte al salir
      }
  });

  gsap.fromTo(".me-1 h2", {
      opacity: 0,
      x: "-110%",
    }, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
          trigger: about,
          start: "top 20%", // La animación comienza cuando el 80% de la imagen está en la vista
          end: "top 20%",   // La animación termina cuando el 20% de la imagen está en la vista
          toggleActions: "play none none reverse" // Reproduce la animación al entrar y revierte al salir
      }
  });

  gsap.fromTo(".me-1 p", {
    opacity: 0,
    x: "-110%",
  }, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: about,
        start: "top 20%", // La animación comienza cuando el 80% de la imagen está en la vista
        end: "top 20%",   // La animación termina cuando el 20% de la imagen está en la vista
        toggleActions: "play none none reverse" // Reproduce la animación al entrar y revierte al salir
    }
});
});

