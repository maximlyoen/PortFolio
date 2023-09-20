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
        document.querySelector(".MesCompetence").textContent = "My skills";
        /*--------------------Expérience--------------------*/
        document.querySelector(".College").textContent = "College";
        document.querySelector(".TitreCollege").textContent = "Collège Gérard Philippe Bagnols-sur-Cèze (30200)";
        document.querySelector(".TextCollege").textContent = "During these years I had to do an internship in a company. This internship allowed me to understand the importance of safety in a company and cooperation in working within a team.";
        document.querySelector(".Lycee").textContent = "Lycée";
        document.querySelector(".TitreLycee").textContent = "Albert Einstein School Bagnols-sur-Cèze (30200)";
        document.querySelector(".TextLycee").textContent = "This diploma allowed me to acquire a versatile technological training in the fields of industry and sustainable development.";
        document.querySelector(".ereAnnee1").textContent = "1st year IUT Informatique";
        document.querySelector(".Titre1ereAnnee").textContent = "IUT informatique Bordeaux site Gradignan (33170)";
        document.querySelector(".Text1ereAnnee1").textContent = "what I learned:";
        document.querySelector(".Text1ereAnnee2").textContent = "-adapt to working in hybrid and remote";
        document.querySelector(".Text1ereAnnee3").textContent = "-risk management";
        document.querySelector(".Text1ereAnnee4").textContent = "-Integrate a work ecosystem";
        document.querySelector(".Text1ereAnnee5").textContent = "-an environment that allows me to flourish";
        document.querySelector(".emeAnnee2").textContent = "2nd year IUT Informatique";
        document.querySelector(".Titre2emeAnnee").textContent = "IUT informatique Bordeaux site Gradignan (33170)";
        document.querySelector(".Text2emeAnnee1").textContent = "what I learned:";
        document.querySelector(".Text2emeAnnee2").textContent = "-The educational continuity of the first year";
        document.querySelector(".Text2emeAnnee3").textContent = "-Work next to studies in a supermarket";
        document.querySelector(".Text2emeAnnee4").textContent = "-10 week internship at SimforHealth";
        document.querySelector(".Text2emeAnnee5").textContent = "-work in a company";
        document.querySelector(".Text2emeAnnee6").textContent = "-Work on an existing project";
        document.querySelector(".Text2emeAnnee7").textContent = "-Work in hybrid and remote";
        document.querySelector(".Text2emeAnnee8").textContent = "-Agile work";
        document.querySelector(".Text2emeAnnee9").textContent = "-Work in Scrum method";
        document.querySelector(".emeAnnee3").textContent = "3rd year IUT Informatique";
        document.querySelector(".Titre3emeAnnee").textContent = "IUT informatique Bordeaux site Gradignan (33170)";
        document.querySelector(".Text3emeAnnee1").textContent = "what I learned:";
        document.querySelector(".Text3emeAnnee2").textContent = "-The pedagogical continuity of the first and second years";
        document.querySelector(".Text3emeAnnee3").textContent = "-Work alongside studies in a Pizzeria as a server";
        /*--------------------Contact--------------------*/
        document.querySelector(".contact").textContent = "Contact";
        document.querySelector(".moi").textContent = "Me";
        document.querySelector("#numeroTel").textContent = "Phone number : +33 7 83 33 01 15";
        document.querySelector("#Nom/Prenom").placeholder = "First Name/Last Name";
        document.querySelector("#Email").placeholder = "Email";
        document.querySelector("#Telephone").placeholder = "Phone number";
        document.querySelector("#Message").placeholder = "Message";
        document.querySelector("#envoyer").textContent = "Send";
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
        document.querySelector(".MesCompetence").textContent = "Mes compétences";
        /*--------------------Expérience--------------------*/
        document.querySelector(".College").textContent = "Collège";
        document.querySelector(".TitreCollege").textContent = "Collège Gérard Philippe Bagnols-sur-Cèze (30200)";
        document.querySelector(".TextCollege").textContent = "Durant ces années j'ai etait amené à effectuer un stage en entreprise. Ce stage m’a permis de comprendre importance de la sécurité dans une entreprise et de la coopération dans le travail au sein d'une équipe.";
        document.querySelector(".Lycee").textContent = "Lycée";
        document.querySelector(".TitreLycee").textContent = "Lycée Albert Einstein Bagnols-sur-Cèze (30200)";
        document.querySelector(".TextLycee").textContent = "Ce diplôme m’a permis d'acquérir une formation technologique polyvalente dans les domaines de l'industrie et du développement durable.";
        document.querySelector(".ereAnnee1").textContent = "1ère année IUT Informatique";
        document.querySelector(".Titre1ereAnnee").textContent = "IUT informatique Bordeaux site Gradignan (33170)";
        document.querySelector(".Text1ereAnnee1").textContent = "Ce que j’ai appris:";
        document.querySelector(".Text1ereAnnee2").textContent = "-m’adapter au travail en hybride et remote";
        document.querySelector(".Text1ereAnnee3").textContent = "-La gestion du risque";
        document.querySelector(".Text1ereAnnee4").textContent = "-Intégrer un écosystème de travail";
        document.querySelector(".Text1ereAnnee5").textContent = "-un milieu qui permet de m'épanouir";
        document.querySelector(".emeAnnee2").textContent = "2ème année IUT Informatique";
        document.querySelector(".Titre2emeAnnee").textContent = "IUT informatique Bordeaux site Gradignan (33170)";
        document.querySelector(".Text2emeAnnee1").textContent = "Ce que j’ai appris:";
        document.querySelector(".Text2emeAnnee2").textContent = "-La continuité pédagogique de la première année";
        document.querySelector(".Text2emeAnnee3").textContent = "-Travail a coté des etudes dans un supermarché";
        document.querySelector(".Text2emeAnnee4").textContent = "-Stage en entreprise de 10 semaine chez SimforHealth";
        document.querySelector(".Text2emeAnnee5").textContent = "-Travail en entreprise";
        document.querySelector(".Text2emeAnnee6").textContent = "-Travail sur un projet dejà existant";
        document.querySelector(".Text2emeAnnee7").textContent = "-Travail en hybride et remote";
        document.querySelector(".Text2emeAnnee8").textContent = "-Travail en méthode agile";
        document.querySelector(".Text2emeAnnee9").textContent = "-Travail en méthode Scrum";
        document.querySelector(".emeAnnee3").textContent = "3ème année IUT Informatique";
        document.querySelector(".Titre3emeAnnee").textContent = "IUT informatique Bordeaux site Gradignan (33170)";
        document.querySelector(".Text3emeAnnee1").textContent = "Ce que j’ai appris:";
        document.querySelector(".Text3emeAnnee2").textContent = "-La continuité pédagogique des première et deuxième année";
        document.querySelector(".Text3emeAnnee3").textContent = "-Travail a coté des etudes dans une Pizzeria en temps que serveur";
        /*--------------------Contact--------------------*/
        document.querySelector(".contact").textContent = "Contact";
        document.querySelector(".moi").textContent = "Moi";
        document.querySelector("#numeroTel").textContent = "Numéro de téléphone : +33 7 83 33 01 15";
        document.querySelector("#NomPrenom").placeholder = 'Prénom/Nom';
        document.querySelector("#Email").placeholder = "Email";
        document.querySelector("#Telephone").placeholder = "Numér de téléphone";
        document.querySelector("#Message").placeholder = "Message";
        document.querySelector("#envoyer").textContent = "Envoyer";
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