// Menú hamburguesa
const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("navegacion");

function toggleMenu() {
  navList.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleMenu);

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll("#navegacion a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
  });
});

// Cambio de idioma
var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  eng: {
    // Textos a traducir
    heroTitle: "Josué Espinoza",
    heroSubtitle: "3D Artist & Modeler",
    aboutButton: "View Portfolio",
    navAbout: "About me",
    navProjects: "Projects",
    navContact: "Contact",
    aboutTitle: "About me",
    aboutText1:
      "Hi, I'm Josué Espinoza, a digital artist specialized in 3D modeling with over 3 years of experience creating detailed models for video games, animation and architectural visualization.",
    aboutText2:
      "My passion for digital art began when I was a student of Multimedia and Digital Animation at the Autonomous University of Nuevo León, where I developed technical and artistic skills to create realistic and stylized 3D models.",
    aboutText3:
      "I mainly work with Blender, Maya and ZBrush, but I also have experience with Substance Painter for texturing and Unreal Engine for real-time rendering.",
    projectsTitle: "My Projects",
    contactTitle: "Contact me",
  },
  es: {
    heroTitle: "Josué Espinoza",
    heroSubtitle: "Artista & Modelador 3D",
    aboutButton: "Ver Portafolio",
    navAbout: "Sobre mi",
    navProjects: "Proyectos",
    navContact: "Contacto",
    aboutTitle: "Sobre mí",
    aboutText1:
      "Soy Josué Espinoza, artista digital especializado en modelado 3D con más de 3 años de experiencia creando modelos detallados para videojuegos, animación y visualización arquitectónica.",
    aboutText2:
      "Mi pasión por el arte digital comenzó cuando era estudiante de Multimedia y Animación Digital en la Universidad Autónoma de Nuevo León, donde desarrollé habilidades técnicas y artísticas para crear modelos 3D realistas y estilizados.",
    aboutText3:
      "Trabajo principalmente con Blender, Maya y ZBrush, pero también tengo experiencia con Substance Painter para texturizado y Unreal Engine para renderizado en tiempo real.",
    projectsTitle: "Mis Proyectos",
    contactTitle: "Contáctame",
  },
};

// Define el lenguaje por el hash
if (window.location.hash) {
  if (window.location.hash === "#en") {
    // Actualiza todos los textos
    document.querySelector(".hero-text h1").textContent =
      language.eng.heroTitle;
    document.querySelector(".subtitle p").textContent =
      language.eng.heroSubtitle;
    document.querySelector(".button a").textContent = language.eng.aboutButton;

    // Navegación
    document.querySelector("#navegacion li:nth-child(1) a").textContent =
      language.eng.navAbout;
    document.querySelector("#navegacion li:nth-child(2) a").textContent =
      language.eng.navProjects;
    document.querySelector("#navegacion li:nth-child(3) a").textContent =
      language.eng.navContact;

    // Sobre mí
    document.querySelector(".information h2").textContent =
      language.eng.aboutTitle;
    const aboutParagraphs = document.querySelectorAll(".information p");
    aboutParagraphs[0].textContent = language.eng.aboutText1;
    aboutParagraphs[1].textContent = language.eng.aboutText2;
    aboutParagraphs[2].textContent = language.eng.aboutText3;

    // Proyectos
    document.querySelector(".sub-section-alternative h2").textContent =
      language.eng.projectsTitle;

    // Contacto
    document.querySelector("footer h2").textContent = language.eng.contactTitle;

    // Definir iteración de cambio de idioma
    for (let i = 0; i < dataReload.length; i++) {
      dataReload[i].onclick = function () {
        location.reload(true);
      };
    }
  }
}

// Hace un delay al reiniciar la página
function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 100);
}
