const items = [
    {
      img: "./build/img/mascota3.jpg",
      icon: "<i class='ph ph-meta-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.065,
    },
    {
      img: "./build/img/mascota2.jpg",
      icon: "<i class='ph-bold ph-pinterest-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.05,
    },
    {
      img: "./build/img/mascota1.jpg",
      icon: "<i class='ph ph-instagram-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.08,
    },
    {
      img: "./build/img/mascota6.jpg",
      icon: "<i class='ph ph-meta-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.1,
    },
    {
      img: "./build/img/mascota5.jpg",
      icon: "<i class='ph ph-instagram-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.07,
    },
    {
      img: "./build/img/mascota4.jpg",
      icon: "<i class='ph-bold ph-pinterest-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.085,
    },
    {
      img: "./build/img/mascota7.jpg",
      icon: "<i class='ph ph-instagram-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.06,
    },
    {
      img: "./build/img/mascota8.jpg",
      icon: "<i class='ph-bold ph-pinterest-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.04,
    },
    {
      img: "./build/img/mascota1.jpg",
      icon: "<i class='ph ph-instagram-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.1,
    },
    {
      img: "./build/img/mascota1.jpg",
      icon: "<i class='ph ph-instagram-logo'></i>",
      // link: "#",
      parllaxSpeed: 0.065,
    },
];

const gallery = document.querySelector(".gallery");

const itemPositions = [
  { top: "-5%", left: "5%" },
  { top: "40%", left: "-5%" },
  { top: "25%", left: "20%" },
  { top: "60%", left: "40%" },
  { top: "70%", left: "10%" },
  { top: "-10%", left: "65%" },
  { top: "10%", left: "85%" },
  { top: "40%", left: "60%" },
  { top: "80%", left: "70%" },
  { top: "50%", left: "95%" },
];

items.forEach((itemData, index) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const position = itemPositions[index];
  item.style.top = position.top;
  item.style.left = position.left;

  const img = document.createElement("img");
  img.src = itemData.img;
  item.appendChild(img);

  const link = document.createElement("div");
  link.classList.add("link");
  link.innerHTML = `<a>${itemData.icon}</a>`;
  item.appendChild(link);

  gallery.appendChild(item);
});

document.addEventListener("mousemove", (e) => {
  gallery.querySelectorAll(".item").forEach((item, index) => {
    const animationFactor = items[index].parllaxSpeed;

    const deltaX = (e.clientX - window.innerWidth / 2) * animationFactor;
    const deltaY = (e.clientY - window.innerHeight / 2) * animationFactor;

    gsap.to(item, { x: deltaX, y: deltaY, duration: 0.75 });
  });
});


// Contacto - Form

const overlay = document.querySelector(".overlay");
const btnAbrirForm = document.querySelector(".form");
const cerrarModal = document.querySelector(".cerrarModal");
const modal = document.querySelector(".modal");

btnAbrirForm.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-show");
  overlay.classList.add("active");
});
cerrarModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal-show");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
  modal.classList.remove("modal-show");
  overlay.classList.remove("active");
});

const enviar = document.querySelector(".enviar");
enviar.addEventListener("click", (e) => {
  e.preventDefault();
});