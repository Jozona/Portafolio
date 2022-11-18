const hamburguerBtn = document.getElementById('hamburger')
const listaNavegacion = document.getElementById('navegacion')

function toggleButton() {
    listaNavegacion.classList.toggle('mostrar')
}

hamburguerBtn.addEventListener('click', toggleButton)


// Cambio de idioma
var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    eng: {
        botonInfo: "About me",
        txtSubtitulo: "Developer",
        liSobreMi: "About me",
        liProyectos: "Projects",
        liContacto: "Contact",
        hSobreMi: "About me",
        txtDescripcion: "Hi, my name is Josué Emiliano Espinoza Gutiérrez. I'm a software developer and current student of the Faculty of Physical-Mathematical Sciences at the Autonomous University of Nuevo Leon. Currently, I'm enrolled in the degree of Multimedia and Digitial Animation looking to get better as a person and programmer. A pleasure to meet you.",
        hContactar: "Contact me",
        hProyectos: "Projects",
        web: 'https://gh-card.dev/repos/Jozona/Tu-blog.png',
        mad: "./src/imagenes/Untitled.png",
        intermedia: "https://gh-card.dev/repos/Jozona/Tienda-En-Linea-Web.png?fullname=",
        aavd: "https://gh-card.dev/repos/Jozona/AAVD-2.png"
        
    },
    es: {
        //Esta parte no es utilizada en el programa pero puede llegar a ser necesita en caso de agregar mas lenguas
        botonInfo: "Sobre mi"
    }
};

//Define el lenguaje con por el hash
if (window.location.hash) {
    if (window.location.hash === "#en") {
        //Todo a cambiar
        botonInfo.textContent = language.eng.botonInfo;
        txtSubtitulo.textContent = language.eng.txtSubtitulo;
        liSobreMi.textContent = language.eng.liSobreMi;
        liProyectos.textContent = language.eng.liProyectos;
        liContacto.textContent = language.eng.liContacto;
        hSobreMi.textContent = language.eng.hSobreMi;
        txtDescripcion.textContent = language.eng.txtDescripcion;
        hContactar.textContent = language.eng.hContactar;
        hProyectos.textContent = language.eng.hProyectos;
        intermedia.src = language.eng.intermedia;
        mad.src = language.eng.mad;
        web.src =language.eng.web;
        aavd.src =language.eng.aavd;
        //Definir iteracion de cambio de idioma
        for (i = 0; i <= dataReload.length; i++) {
            dataReload[i].onclick = function () {
                location.reload(true);
            };
        }
    }
}


//Hace un delay al reiniciar la pagina, para que de tiempo al programa para agregar el hash
function reloadPage() {
    setTimeout(function () {
        location.reload();
    }, 100);
}