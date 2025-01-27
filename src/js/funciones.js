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

// Contacto - Form

const btnAbrirForm = document.querySelector(".form");
const contactHeader = document.querySelector(".btn-form");
const cerrarModal = document.querySelector(".cerrarModal");
const modal = document.querySelector(".modal");

btnAbrirForm.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-show");
});
contactHeader.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-show");
});
cerrarModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal-show");
});

const enviar = document.querySelector(".enviar");
enviar.addEventListener("click", (e) => {
  e.preventDefault();
});

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
