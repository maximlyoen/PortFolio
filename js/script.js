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
    if (buttonLanguageText === "Français") {
        initializeTyped(["Maxim Lyoen", "Developer"]);
    } else {
        initializeTyped(["Maxim Lyoen", "Développeur"]);
    }
    if (buttonLanguageText === "Français") {
        /*--------------------NavBar--------------------*/
        document.getElementById("BonjourJeSuis").textContent = "Hello, I'm";
        document.querySelector(".Présentation").textContent = "Presentation";
        document.querySelector(".Portfolio").textContent = "Portfolio";
        document.querySelector(".Compétences").textContent = "Skills";
        document.querySelector(".Expérience").textContent = "Experience";
        document.querySelector(".Contact").textContent = "Contact";
        /*--------------------MainPage--------------------*/
        document.querySelector(".JeSuis").textContent = "I'm";
        document.querySelector(".MaximLyoen").textContent = " Maxim Lyoen";
        document.querySelector(".Developpeur").textContent = "Developer";
        /*--------------------Présentation--------------------*/
        document.querySelector(".Bonjour").textContent = "Hello";
        document.querySelector(".TextPresentation").textContent = "At the age of 20, I chose to move towards the profession of developer because today the technologies of information is at the heart of all business transformations, Now in 3rd yearfrom IUT Informatique in Bordeaux, I like to learn new things and see the extent of knowledge still possibleto learn.";
        document.querySelector(".TelechargerCV").textContent = "Download CV";
        document.querySelector(".Nom").textContent = "Name :";
        document.querySelector(".Prenom").textContent = "Last Name :";
        document.querySelector(".Age").textContent = "Age :";
        document.querySelector(".Ville").textContent = "City :";
        document.querySelector(".Lyoen").textContent = " Lyoen";
        document.querySelector(".Maxim").textContent = " Maxim";
        document.querySelector(".calculAge").textContent = " "+ calculerAge(new Date('2002-04-29'), new Date()) + " years old";
        document.querySelector(".Strasbourg").textContent = " Strasbourg";
        /*--------------------PortFolio--------------------*/
        document.querySelector(".LesProjetQueJaiRealisees").textContent = "The projects I have realized";
        document.querySelector("#Pong").textContent = "Pong";
        document.querySelector(".textPong").textContent = "The Pong project is a project where the goal was to recreate the famous pong game. We had to add some features like playing with 4 balls";
        document.querySelector("#Lowatem").textContent = "Lowatem";
        document.querySelector(".textLowatem").textContent = "The lowatem project is a project where the goal was to create a board game in the first part and then to create the most powerful AI possible to compete with other teams.";
        document.querySelector("#ComparaisonAlgo").textContent = "Algorithm comparison";
        document.querySelector(".textComparaisonAlgo").textContent = "The goal of this project was to create 2 programs and choose the most efficient and say why we chose it";
        document.querySelector("#GestionMachineVirtuel").textContent = "Machine virtual management";
        document.querySelector(".textGestionMachineVirtuel").textContent = "The goal of the project was to create a portable virtual machine with software already installed for a team of developers, it was also necessary to choose OS with which VMs would run";
        document.querySelector("#bd").textContent = "Database";
        document.querySelector(".textbd").textContent = "The purpose of this project was to create a database for a company. It was also necessary to create a site forecast that allowed to manage the database";
        document.querySelector("#SitePcVente").textContent = "Custom pc sales site";
        document.querySelector(".textSitePcVente").textContent = "The goal of this project is to create a site or business that sells something. It was necessary to create a site adapted to customers with a strong power of attraction";
        /*--------------------Compétence--------------------*/
        /*--------------------Expérience--------------------*/
        /*--------------------Contact--------------------*/
    } else {
        /*--------------------NavBar--------------------*/
        document.getElementById("BonjourJeSuis").textContent = "Bonjour, je suis";
        document.querySelector(".Présentation").textContent = "Présentation";
        document.querySelector(".Portfolio").textContent = "Portfolio";
        document.querySelector(".Compétences").textContent = "Compétences";
        document.querySelector(".Expérience").textContent = "Expérience";
        document.querySelector(".Contact").textContent = "Contact";
        /*--------------------MainPage--------------------*/
        document.querySelector(".JeSuis").textContent = "Je suis";
        document.querySelector(".MaximLyoen").textContent = "Maxim Lyoen";
        document.querySelector(".Developpeur").textContent = "Développeur";
        /*--------------------Présentation--------------------*/
        document.querySelector(".Bonjour").textContent = "Bonjour";
        document.querySelector(".TextPresentation").textContent = "À 20 ans, j’ai choisi de m’orienter vers le métier de développeur car aujourd’hui les technologies de l’information sont présentes au cœur de toutes les transformations d'entreprise, Maintenant en 3ème année d'IUT Informatique à Bordeaux, j'aime apprendre de nouvelles choses et voir ampleur du savoir encore possible à apprendre.";
        document.querySelector(".TelechargerCV").textContent = "Télécharger CV";
        document.querySelector(".Nom").textContent = "Nom :";
        document.querySelector(".Prenom").textContent = "Prénom :";
        document.querySelector(".Age").textContent = "Age :";
        document.querySelector(".Ville").textContent = "Ville :";
        document.querySelector(".Lyoen").textContent = " Lyoen";
        document.querySelector(".Maxim").textContent = " Maxim";
        document.querySelector(".calculAge").textContent = " "+ calculerAge(new Date('2002-04-29'), new Date()) + " ans";
        document.querySelector(".Strasbourg").textContent = " Strasbourg";
        /*--------------------PortFolio--------------------*/
        document.querySelector(".LesProjetQueJaiRealisees").textContent = "Les projets que j'ai réalisées";
        document.querySelector("#Pong").textContent = "Pong";
        document.querySelector(".textPong").textContent = "Le projet Pong est un projet ou le but était de recréer le très connu jeu pong. Nous devions ajouterquelques fonctionnalités comme de jouer avec 4 balles";
        document.querySelector("#Lowatem").textContent = "Lowatem";
        document.querySelector(".textLowatem").textContent = "Le projet lowatem es un projet où le but était de créer un jeu de plateau en première partie puis de créer une IA la plus performante possible pour affronter celle des autres équipes.";
        document.querySelector("#ComparaisonAlgo").textContent = "Comparaison d'algo";
        document.querySelector(".textComparaisonAlgo").textContent = "Le but de ce projet était de créer 2 programmes et de choisir le plus performant et de dire pourquoi on l'a choisi";
        document.querySelector("#GestionMachineVirtuel").textContent = "Gestion Machine vistuel";
        document.querySelector(".textGestionMachineVirtuel").textContent = "Le but du projet était de créer une machine virtuelle portable avec des logiciels déjà installés pour une équipe de développeurs, il fallait aussi choisir OS avec lesquels les VM allaient tourner";
        document.querySelector("#bd").textContent = "Base de donnée";
        document.querySelector(".textbd").textContent = "Le but de ce projet était de créer une base de données pour une entreprise. Il fallait aussi créer un prévisionnel du site qui permettait de gérer la base de données";
        document.querySelector("#SitePcVente").textContent = "Site de vente pc custom";
        document.querySelector(".textSitePcVente").textContent = "Le but de ce projet est de créer un site ou une entreprise qui vend quelque chose. Il fallait créer un site adapté aux clients avec un fort pouvoir d'attraction";
        /*--------------------Compétence--------------------*/
        /*--------------------Expérience--------------------*/
        /*--------------------Contact--------------------*/
    }
};

function calculerAge(dateNaissance, dateActuelle) {
    const anneeNaissance = dateNaissance.getFullYear();
    const moisNaissance = dateNaissance.getMonth();
    const jourNaissance = dateNaissance.getDate();
    const anneeActuelle = dateActuelle.getFullYear();
    const moisActuel = dateActuelle.getMonth();
    const jourActuel = dateActuelle.getDate();
    let age = anneeActuelle - anneeNaissance;
    if (moisActuel < moisNaissance || (moisActuel === moisNaissance && jourActuel < jourNaissance)) {
        age--;
    }
    return age;
}