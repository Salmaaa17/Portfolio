const translations = {
    en: {
      pres: "Presentation",
      port: "Portfolio",
      habi: "Habilities",
      cont: "Contact",
      foot: "Copyright © 2024. Salma Monzó | All rights reserved",
      first_paragraph:
        "Hello, my name is Salma and I am dedicated to the audiovisual world. I am currently studying a higher degree in 2D and 3D animation and previously I did a medium degree in image and sound",
      second_paragraph:
        "I am a very creative person and very interested in learning about different subjects. I have done many projects related to this world and I would like to show you some of these projects",
        

        intr: "My projects",
        proj1: "Editing with Photoshop",
        proj2: "Glass lighting",
        proj3: "Texturizado de piezas de ajedrez",
        proj4: "Texturing of toy train",
        proj5: "Lighting and texturing of a motorbike helmet",
        proj6: "Texturing, lighting and editing of a cartoon scene",

        title1: "Animation",
        text1: "Advanced knowledge of the Adobe Creative Cloud suite of programmes",
        title2: "Texturing and Lighting",
        text2: "Intermediate knowledge of the Maya programme and good development in it",
        title3: "Drawing and Modelling",
        text3: "Basic knowledge of the Maya programme",
        title4: "Programming",
        text4: "Basic knowledge of programming software such as Visual Studio Code",

        resume: "If you are interested in contacting me, here is more detailed information about me",
        cont: "Contact",

    },
    es: {
      pres: "Presentación",
      port: "Portafolio",
      habi: "Habilidades",
      cont: "Contacto",
      foot: "Copyright © 2024. Salma Monzó | Todos los derechos reservados",
      first_paragraph:
        "Hola, me presento, me llamo Salma y me dedico al mundo audiovisual. Actualmente estudio un grado superior de animación 2D y 3D y anteriormente hice un grado medio de imagen y sonido",
      second_paragraph:
        "Soy una persona bastante creativa y muy interesada en el aprendizaje de diversos temas. He realizado múltiples proyectos relacionados con este mundo y me gustaría enseñaros algunos de éstos",
        

        intr: "Mis proyectos",
        proj1: "Edición con Photoshop",
        proj2: "Iluminación de cristaleria",
        proj3: "Texturizado de piezas de ajedrez",
        proj4: "Texturizado de tren de juguete",
        proj5: "Iluminación y texturizado de un casco",
        proj6: "Texturizado, iluminación y montaje de una escena cartoon",


        title1: "Animación",
        text1: "Conocimiento avanzado sobre programas de la suit de Adobe Creative Cloud",
        title2: "Texturizado y iluminación",
        text2: "Conocimiento intermedio sobre el programa Maya y buen desarrollo en éste",
        title3: "Dibujo y modelado",
        text3: "Conocimiento básico en el programa Maya",
        title4: "Programación",
        text4: "Conocimiento básico en programas de programación como Visual Studio Code",


        resume: "Si estás interesado o interesada en contactar conmigo, aquí te dejo información más detallada sobre mí",
        cont: "Contacto",
    },

    fr: {
        pres: "Présentation ",
        port: "Portfolio",
        habi: "Compétences",
        cont: "Contact ",
        foot: "Copyright © 2024. Salma Monzó | Tous droits réservés",
        first_paragraph:
          "Bonjour, je m'appelle Salma et je me consacre au monde de l'audiovisuel. J'étudie actuellement un diplôme supérieur en animation 2D et 3D et, auparavant, j'ai obtenu un diplôme moyen en image et en son",
        second_paragraph:
          "Je suis une personne très créative et très intéressée par l'apprentissage de différents sujets. J'ai réalisé de nombreux projets liés à ce monde et j'aimerais vous en montrer quelques-uns",
          
  
          intr: "Mes projets",
          proj1: "Edition avec Photoshop",
          proj2: "Illumination d'objets en verre",
          proj3: "Texturation de pièces d'échecs",
          proj4: "Texture d'un petit train",
          proj5: "Illumination et texturation d'un casque de moto",
          proj6: "Texture, éclairage et édition d'une scène de dessin animé",
  
  
          title1: "Animation",
          text1: "Connaissance avancée de la suite Adobe Creative Cloud",
          title2: "Texture et éclairage",
          text2: "Connaissance intermédiaire de Maya et bon développement dans Maya",
          title3: "Dessin et modélisation",
          text3: "Connaissance de base de Maya",
          title4: "Programmation",
          text4: "Connaissance de base d'un logiciel de programmation tel que Visual Studio Code",
  
  
          resume: "Si vous souhaitez me contacter, voici des informations plus détaillées à mon sujet",
          cont: "Contact",
      },

    it: {
        pres: "Presentazione",
        port: "Portfolio",
        habi: "Competenze",
        cont: "Contatto",
        foot: "Copyright © 2024. Salma Monzó | Tutti i diritti riservati",
        first_paragraph:
          "Salve, mi chiamo Salma e mi dedico al mondo dell'audiovisivo. Attualmente sto studiando un diploma superiore in animazione 2D e 3D e precedentemente ho conseguito una laurea media in immagine e suono",
        second_paragraph:
          "Sono una persona molto creativa e molto interessata a conoscere diversi argomenti. Ho realizzato molti progetti legati a questo mondo e vorrei mostrarvene alcuni",
          
  
          intr: "I miei progetti",
          proj1: "Editing con Photoshop",
          proj2: "Illuminazione di oggetti in vetro",
          proj3: "Texturing dei pezzi degli scacchi",
          proj4: "Texturing del treno giocattolo",
          proj5: "Illuminazione e texturing di un casco da moto",
          proj6: "Texturing, illuminazione e assemblaggio di una scena di cartone animato",
  
  
          title1: "Animazione",
          text1: "Conoscenza avanzata della suite Adobe Creative Cloud",
          title2: "Texturing e illuminazione",
          text2: "Conoscenza intermedia di Maya e buon sviluppo in Maya",
          title3: "Disegno e modellazione",
          text3: "Conoscenza di base di Maya",
          title4: "Programmazione",
          text4: "Conoscenza di base di software di programmazione come Visual Studio Code",
  
  
          resume: "Se siete interessati a contattarmi, ecco informazioni più dettagliate su di me",
          cont: "Contatto",
      },
  };
  
  // **Actualizar textos según el idioma seleccionado**
  function updateTexts(language) {
    // Asegurarse de que el idioma exista
    if (!translations[language]) return;
    // INDEX
    if (document.getElementById("pres")) {
        document.getElementById("pres").textContent = translations[language].pres;
      }
      if (document.getElementById("port")) {
        document.getElementById("port").textContent = translations[language].port;
      }
      if (document.getElementById("habi")) {
        document.getElementById("habi").textContent = translations[language].habi;
      }
      if (document.getElementById("cont")) {
        document.getElementById("cont").textContent = translations[language].cont;
      }
      if (document.getElementById("first_paragraph")) {
        document.getElementById("first_paragraph").textContent = translations[language].first_paragraph;
      }
      if (document.getElementById("second_paragraph")) {
        document.getElementById("second_paragraph").textContent = translations[language].second_paragraph;
      }
      if (document.getElementById("foot")) {
        document.getElementById("foot").textContent = translations[language].foot;
      }

    // PORTFOLIO
    if (document.getElementById("intr")) {
        document.getElementById("intr").textContent = translations[language].intr;
    }
    if (document.getElementById("proj1")) {
        document.getElementById("proj1").textContent = translations[language].proj1;
    }
    if (document.getElementById("proj2")) {
        document.getElementById("proj2").textContent = translations[language].proj2;
    }
    if (document.getElementById("proj3")) {
        document.getElementById("proj3").textContent = translations[language].proj3;
    }
    if (document.getElementById("proj4")) {
        document.getElementById("proj4").textContent = translations[language].proj4;
    }
    if (document.getElementById("proj5")) {
        document.getElementById("proj5").textContent = translations[language].proj5;
    }
    if (document.getElementById("proj6")) {
        document.getElementById("proj6").textContent = translations[language].proj6;
    }
    if (document.getElementById("foot2")) {
        document.getElementById("foot2").textContent = translations[language].foot2;
    }
    
    // HABILIDADES
    if (document.getElementById("title1")) {
        document.getElementById("title1").textContent = translations[language].title1;
    }
    if (document.getElementById("text1")) {
        document.getElementById("text1").textContent = translations[language].text1;
    }
    if (document.getElementById("title2")) {
        document.getElementById("title2").textContent = translations[language].title2;
    }
    if (document.getElementById("text2")) {
        document.getElementById("text2").textContent = translations[language].text2;
    }
    if (document.getElementById("title3")) {
        document.getElementById("title3").textContent = translations[language].title3;
    }
    if (document.getElementById("text3")) {
        document.getElementById("text3").textContent = translations[language].text3;
    }
    if (document.getElementById("title4")) {
        document.getElementById("title4").textContent = translations[language].title4;
    }
    if (document.getElementById("text4")) {
        document.getElementById("text4").textContent = translations[language].text4;
    }

    // CONTACTO
    if (document.getElementById("resume")) {
        document.getElementById("resume").textContent = translations[language].resume;
    }
    if (document.getElementById("cont")) {
        document.getElementById("cont").textContent = translations[language].cont;
    }
  }
  
  // **Evento para cambiar el idioma al seleccionar en el desplegable**
  document.getElementById("language-selector").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    const selectedFlag = event.target.options[event.target.selectedIndex].dataset.flag;
  
    // Cambiar la bandera mostrada
    document.getElementById("current-flag").src = selectedFlag;
  
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem("selectedLanguage", selectedLanguage);
  
    // Actualizar los textos en la página
    updateTexts(selectedLanguage);
  });
  
  // **Evitar recargar la página al hacer clic en el botón de "Inicio"**
  const homeLink = document.querySelector(".home1 a");

if (homeLink) {
    homeLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevenir recarga
        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazamiento suave
    });
}

  // **Cargar idioma y configurar la bandera al cargar la página**
  window.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "es"; // Español por defecto
    const languageSelector = document.getElementById("language-selector");
  
    // Seleccionar el idioma guardado en el desplegable
    languageSelector.value = savedLanguage;
  
    // Actualizar la bandera mostrada
    const selectedOption = [...languageSelector.options].find(
      (option) => option.value === savedLanguage
    );
    document.getElementById("current-flag").src = selectedOption.dataset.flag;
  
    // Actualizar los textos
    updateTexts(savedLanguage);
  });