let typed = null;  // Déclarer la variable typed en dehors de la fonction pour éviter les redéclarations
initializeTyped(["Maxim Lyoen", "Développeur"])
changeLanguage();
function initializeTyped(strings) {
  if (typed) {
    typed.destroy();  // Détruire l'instance précédente de Typed.js
  }

  typed = new Typed(".typing", {
    strings: strings,
    typeSpeed: 50,
    backSpeed: 50,  // Notez la correction de la propriété backSpeed
    loop: true
  });
}

document.getElementById("buttonLanguage").onclick = function(){
    button = document.getElementById("buttonLanguageText");
    if(button.textContent == "English"){
        button.textContent = 'Français';
        changeLanguage();
    }else{
        button.textContent = 'English';
        changeLanguage();
    }
};


function changeLanguage() {
    const buttonLanguageText = document.getElementById("buttonLanguageText").innerHTML;
    if (buttonLanguageText === "English") {
        initializeTyped(["Maxim Lyoen", "Developer"]);
    } else {
        initializeTyped(["Maxim Lyoen", "Développeur"]);
    }
    if (buttonLanguageText === "English") {
        /*--------------------NavBar--------------------*/
        document.getElementById("BonjourJeSuis").textContent = "Hello, I'm";
        document.querySelector(".Présentation").textContent = "Presentation";
        document.querySelector(".Portfolio").textContent = "Portfolio";
        document.querySelector(".Compétences").textContent = "Skills";
        document.querySelector(".Expérience").textContent = "Experience";
        document.querySelector(".Contact").textContent = "Contact";
        /*--------------------MainPage--------------------*/
    } else {
        /*--------------------NavBar--------------------*/
        document.getElementById("BonjourJeSuis").textContent = "Bonjour, je suis";
        document.querySelector(".Présentation").textContent = "Présentation";
        document.querySelector(".Portfolio").textContent = "Portfolio";
        document.querySelector(".Compétences").textContent = "Compétences";
        document.querySelector(".Expérience").textContent = "Expérience";
        document.querySelector(".Contact").textContent = "Contact";
        /*--------------------MainPage--------------------*/
    }
};