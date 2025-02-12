document.addEventListener("DOMContentLoaded", function () {
  darkMode();
});

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// menu
let toggle = document.getElementById('toggle');
let menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
})

//Nav scroll selector
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header div ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header div ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

console.log(window);

// Dark Mode

function darkMode() {
  const botonDarkMode = document.querySelector(".dark-mode-boton");

  botonDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Guardar en localstorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
  });
}

// Obtener el modo actual
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

// Loader

document.addEventListener("DOMContentLoaded", function () {

  gsap.to("body", {
    overflow: "hidden",
  });

  gsap.set("#toggle", { y: -150});
  gsap.set("#dark-mode", { y: -150});
  gsap.set("#header p", { x: 400});

  const digit1 = document.querySelector(".digit-1");
  const digit2 = document.querySelector(".digit-2");
  const digit3 = document.querySelector(".digit-3");

  function splitTextIntoSpans(selector) {
    var element = document.querySelector(selector);
    if (element) {
      var text = element.innerText;
      var splitText = text
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
      element.innerHTML = splitText;
    }
  }

  splitTextIntoSpans(".titulo h1");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      digit3.appendChild(div);
    }
  }

  const finalDigit = document.createElement("div");
  finalDigit.className = "num";
  finalDigit.textContent = "0";
  digit3.appendChild(finalDigit);

  function animate(digit, duration, delay = 1) {
    const numHeight = digit.querySelector(".num").clientHeight;
    const totalDistance =
      (digit.querySelectorAll(".num").length - 1) * numHeight;
    gsap.to(digit, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }

  animate(digit3, 5);
  animate(digit2, 6);
  animate(digit1, 2, 5);

  gsap.to(".progress-bar", {
    width: "30%",
    duration: 2,
    ease: "power4.inOut",
    delay: 7,
  });

  gsap.to(".progress-bar", {
    width: "100%",
    // opacity: 0,
    duration: 2,
    delay: 8,
    ease: "power3.out",
    onComplete: () => {
      gsap.set(".pre-loader", {
        display: "none",
      });
    },
  });

  gsap.to(".hero-imgs > img", {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration: 1,
    ease: "power4.inOut",
    stagger: 0.25,
    delay: 9,
  });

  gsap.to(".hero", {
    scale: 1.3,
    duration: 3,
    ease: "power3.inOut",
    delay: 9,
    onComplete: () => {
      // gsap.to(".hero-imgs > img", {
      //   width: "0%",
      //   duration: 1,
      //   ease: "power4.inOut",

      //   onComplete: () => {
      //     gsap.set(".hero", {
      //       display: "none",
      //     });
      //   },
      // });

      gsap.to(".hero", {
        scale: 1,
        duration: 1,
        ease: "power3.inOut",
      });

      gsap.to("body", {
        overflowY: "scroll",
      });
    },
  });

  gsap.to("#toggle", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 11,
  });

  gsap.to("#dark-mode", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 11,
  });

  gsap.to(".titulo h1 span", {
    top: "0px",
    stagger: 0.1,
    duration: 1,
    ease: "power3.out",
    delay: 11,
  });

  gsap.to("#header p", {
    x: 0,
    duration: 1,
    ease: "power3.out",
    delay: 12,
  });
});