
var prenom = document.getElementById("fname").value.toString();
var nom = document.getElementById("name").value.toString();
var listParticipant = [];
let j = 0;

let userFirstName = "";
let userName = "";
var result;
var Nb_Groupe;
var T_groupe;
var nb=1;

/*########-------BTN Supprimer-------##############################################*/

/*demmarage d'animation sur le hover du pointer de la sourie*/
function rotationBTNSupprimON(){

  var rotationOnHoverC = anime({
  targets: '.btnSupprim', 
  easing: 'linear',
  loop: true,
  rotate: [ { value: '2turn',duration: 2000,} ]
  });

  var rotationOnHoverL = anime({
  targets: '.trashExtSupL', 
  easing: 'linear',
  loop: true, 
  rotate: [{value: '20turn',duration: 20000,}]
  });

  var rotationOnHoverR1 = anime({
    targets: '.trashExtInfR1', 
    easing: 'linear',
    loop: true,
    rotateY: [{value: '-20turn',duration: 30000,}],
    rotateX: [{value: '-20turn',duration: 30000,}],
    rotateZ: [{value: '-20turn',duration: 30000,}]
  })
  var rotationOnHoverR2 = anime({
    targets: '.trashExtInfR2', 
    easing: 'linear',
    loop: true,
    rotateY: [{value: '20turn',duration: 30000,}],
    rotateZ: [{value: '20turn',duration: 30000,}
    ]
  })
}

/*arret de l'animation sur l'enlèvement du pointer de la sourie*/
function rotationBTNSupprimOFF(){

  var rotationOnHoverC = anime({
    targets: '.btnSupprim',
    easing: 'linear',
    loop: true,
    rotate: [ {value: '0turn',duration: 0,}]
  })

  var rotationOnHoverL = anime({
    targets: '.trashExtSupL', 
    easing: 'linear',
    loop: true,
    rotate: [{ value: '0turn',duration: 0,}]
  })

  var rotationOnHoverR = anime({
    targets: '.trashExtInfR1', 
    easing: 'linear',
    loop: true,
    rotate: [{value: '0turn',duration: 0,}]
  })
  var rotationOnHoverR = anime({
    targets: '.trashExtInfR2', 
    easing: 'linear',
    loop: true,
    rotate: [{value: '0turn',duration: 0,}]
  })
}

/*#######---animation BTN Retour Page---##########################################*/
  
  const myAnimation = anime({
  targets: '.imgRetourPage',
  scale: 1.5,
  duration: 2000,
  easing: 'linear',
  loop: true,
});

/*########-------controles des noms-------######################################*/
function main() {
  var controlesPassed = controle();
  if (controlesPassed == true){
    ajoutParticipant();
  }
}

function controle(){
  var prenom = document.getElementById("fname").value.toString();
  var nom = document.getElementById("name").value.toString();
  var femme = document.getElementById("inputsSexeFemme").checked;
  var homme = document.getElementById("inputsSexeHomme").checked;

/*###---Champs renseignés---###################*/

  if (prenom == "" && nom == "" && femme == false && homme == false) {
    alert("Veuillez renseigner les champs, s'il vous plait");
    document.getElementById("fname").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    document.getElementById("name").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    document.getElementById("inputsSexeFemme").style.background = "red";
    document.getElementById("inputsSexeHomme").style.background = "red";
    return false;
  } else {
      document.getElementById("fname").style.boxShadow = "0rem 0rem 0rem";
      document.getElementById("name").style.boxShadow = "0rem 0rem 0rem";
      document.getElementById("inputsSexeFemme").style.background = "";
      document.getElementById("inputsSexeHomme").style.background = "";
      }

  if (prenom == "") {
    alert("Il faut un prenom");
    document.getElementById("fname").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    return false; 
  } else {
    document.getElementById("fname").style.boxShadow = "0rem 0rem 0rem";
    }

  if (nom == "") {
    alert("Il faut un nom");
    document.getElementById("name").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    return false;
  } else {
    document.getElementById("name").style.boxShadow = "0rem 0rem 0rem";
    }

  if (femme == false && homme == false){
    alert("Veuillez indiquer votre sexe, s'il vous plait");
    document.getElementById("inputsSexeFemme").style.background = "red";
    document.getElementById("inputsSexeHomme").style.background = "red";
    return false;
  } else {
    document.getElementById("inputsSexeFemme").style.background = "";
    document.getElementById("inputsSexeHomme").style.background = "";
    }

/*###---contenace de chiffre et signaux speciaux--###################*/

/*if(! pseudo.match(/^([a-zA-Z ]+)$/))*/

  if (! prenom.match(/^([a-zA-Z ]+)$/) && ! nom.match(/^([a-zA-Z ]+)$/)) {
    alert("Veuillez indiquez seulement des lettres, s'il vous plait");
    document.getElementById("fname").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    document.getElementById("name").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    return false; 
  } else {
    document.getElementById("fname").style.boxShadow = "0rem 0rem 0rem";
    document.getElementById("name").style.boxShadow = "0rem 0rem 0rem";
    }
  
  if (! prenom.match(/^([a-zA-Z ]+)$/)) {
    alert("Dans votre prenom se trouve au moins un charactere qui n'est pas une lettre");
    document.getElementById("fname").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    return false; 
  } else {
    document.getElementById("fname").style.boxShadow = "0rem 0rem 0rem";
    }

  if (! nom.match(/^([a-zA-Z ]+)$/)) {
    alert("Dans votre nom se trouve au moins un charactere qui n'est pas une lettre");
    document.getElementById("name").style.boxShadow = "0rem 0rem 1.5rem 1.1rem red";
    return false; 
  } else {
    document.getElementById("name").style.boxShadow = "0rem 0rem 0rem";
    }
  return true;
}

/*########-----récupération et affichage des participants--------##############*/

function ajoutParticipant(){
  var sexe = genre();
  var prenom = document.getElementById("fname").value.toString();
  var nom = document.getElementById("name").value.toString();

  var participant = new Participant(nom, prenom, sexe);

  function Participant(nom, prenom, sexe){
    this.nom = nom;
    this.prenom = prenom;
    this.sexe = sexe;
  }

  listParticipant.push(participant);
 //show
  button = document.createElement('button');      //creating element

  //adding class Name on the element
  if (sexe == "femme") {
    button.id = "participant";
    button.className = "participant nomPrenomFemme";
    button.type = "button";
    button.setAttribute("onclick", "selectionParticipant()");
  } else {
    button.id = "participant";
    button.className = "participant nomPrenomHomme";
    button.type = "button";
    button.setAttribute("onclick", "selectionParticipant()");
  }
  
  
  var  affichageParticipants = document.getElementById("participants");

  for (j; j < listParticipant.length; j++) {
    button.textContent += listParticipant[j].prenom + " " + listParticipant[j].nom; 
    affichageParticipants.appendChild(button);  
  }

/*#######----initialiser le formulaire---#####################################*/

  document.getElementById("fname").value = "";
  document.getElementById("name").value = "";

  var iniRadio = document.getElementById("inputsSexeFemme");
   if (iniRadio.checked == true) {
    iniRadio.checked=false;
   }
  var iniRadio = document.getElementById("inputsSexeHomme");
  if (iniRadio.checked == true) {
    iniRadio.checked = false;
  }
}

/*###-----procédure pour supprimer les participants----#########################*/

function selectionParticipant(){
  var participant = document.getElementsByClassName("participant");

  for (i = 0; i < participant.length; i++){
    participant[i].addEventListener("click", function() {
    this.className += " participantSelectionne";
    this.id = "participantSelectionne";
    })
    //il faut supprimer l'ancien "onclick" pour mettre un nouveau qui renvoit à la 
    //fonction pour desélectionner le participant en question en rappuyant dessus
    participant[i].removeAttribute("onclick");
    participant[i].setAttribute("onclick", "deselectionParticipant()");
  }
}

function deselectionParticipant(){
  var participant = document.getElementsByClassName("participantSelectionne");

  for (i = 0; i < participant.length; i++){
    participant[i].addEventListener("click", function() {
    this.className += " participant";
    this.id = "participant";
    })
    //il faut supprimer le nouveau "onclick" pour mettre l'ancien, ce qui permet 
    //de reclicker dessus pour le deséléctionner et encore séléctionner....
    participant[i].removeAttribute("onclick");
    participant[i].setAttribute("onclick", "selectionParticipant()");
  }
}

function supprimer(){
  var participantSelectionne = document.getElementById("participantSelectionne")
  console.log("participantSelectionne: "+participantSelectionne)
  participantSelectionne.remove();
}

/*#########################################################*/

function genre(){
  var femme = document.getElementById("inputsSexeFemme").checked;
  if (femme == true) {
    var sexe = "femme";
  } else {
    var sexe = "homme";
  }
  return sexe;
}

/*#########################################################*/

function getSelectValueTGroupe(tGroupe){
  /**On récupère l'élement html <select>*/
	var selectElmt = document.getElementById(tGroupe);
	return selectElmt.options[selectElmt.selectedIndex].value;
}
function getSelectValueNbGroupe(nbGroupe)
{
	/**On récupère l'élement html <select>*/
	var selectElmt = document.getElementById(nbGroupe);
	return selectElmt.options[selectElmt.selectedIndex].value;
}
















//#####------Griser champs non choisie Groups-----##########################//*/

function gen(){
  var T_groupe = getSelectValueTGroupe('tGroupe');
  var Nb_Groupe = getSelectValueNbGroupe('nbGroupe');
  var depassement = listParticipant.length % T_groupe;

  if ( depassement == 0) {// si c'est pair 
    for( i=0;i<=Nb_Groupe-1;i++){
      var valeur;
      var element_crée;
      var supprimParticipantDouble;
      let liste=[];
      
      for (let nb = 0; nb <= T_groupe-1; nb++) {
        valeur=Math.floor(Math.random() * listParticipant.length);  
        liste.push(listParticipant[valeur]);
        console.dir(liste[nb].sexe);
        
        /* */
        supprimParticipantDouble = listParticipant.indexOf(listParticipant[valeur]);
        listParticipant.splice(supprimParticipantDouble, 1); //add in myIndex
      }
      //show
      for (let i = 0; i <1; i++) {
        element_crée = document.createElement('div');
        var  element_recuperer_dans_le_html=document.getElementById("result"); //creating element
        element_crée.className = 'resultat'; //adding class Name on the element
        element_crée.textContent += "GROUPE "+nb+"\r\n";//add the content in the element
        element_recuperer_dans_le_html.appendChild(element_crée);
        
        for (let j = 0; j < T_groupe ; j++) {
          var sexe = liste[j].sexe;
          //creation des element necesaire pour crée les div pour chaque nom
          var participant = document.createElement('div')
          var div_par_parsone=document.createTextNode(liste[j].nom + " " + liste[j].prenom + '\r\n');
          //ajout defant et pointage  sur le premier enfant courant crée
          if (sexe == "femme") {
            participant.className = "participant nomPrenomFemme";
          } else {
            participant.className = "participant nomPrenomHomme"
          }
          // vaut mieux ajouter la class du sexe dans la ligne vide participant.className=" nom de la class";
          participant.appendChild(div_par_parsone);
          var cible=element_crée;
          cible.appendChild(participant);
  
        }
      
      }
      nb++;
    }
  }
  if (listParticipant.length==3) {
    
    for( i=0;i<=Nb_Groupe-1;i++){
      var valeur;
      var element_crée;
      var supprimParticipantDouble;
      let liste = [];
      let res = 0;

      for (let nb = 0; nb <= T_groupe-1; nb++) {
        valeur = Math.floor(Math.random() * listParticipant.length);  
        liste.push(listParticipant[valeur]);
        supprimParticipantDouble = listParticipant.indexOf(listParticipant[valeur]);
        listParticipant.splice(supprimParticipantDouble, 1); //add in myIndex
        res++;

      }
      if (res == T_groupe-1 ) {
        valeur=Math.floor(Math.random() * listParticipant.length);  
        liste.push(listParticipant[valeur]);
        sup_dans_liste_partcipant = listParticipant.indexOf(listParticipant[valeur]);
        listParticipant.splice(sup_dans_liste_partcipant, 1); //add in myIndex
      }
      
      //show
      for (let i = 0; i <1; i++) {
        element_crée = document.createElement('div');
        var  element_recuperer_dans_le_html=document.getElementById("result"); //creating element
        element_crée.className = 'resultat'; //adding class Name on the element
        element_crée.textContent+="GROUPE "+nb+"\r\n";//add the content in the element
        element_recuperer_dans_le_html.appendChild(element_crée);
          
        for (let j = 0; j < liste.length ; j++) {
          if (liste[j] == undefined){
            break;
          }
          //creation des element necesaire pour crée les div pour chaque nom
          var participant=document.createElement('div')
          var div_par_parsone=document.createTextNode(liste[j]+'\r\n');
          //ajout defant et pointage  sur le premier enfant courant crée
          
          // vaut mieux ajouter la class du sexe dans la ligne vide participant.className=" nom de la class";
          
          participant.appendChild(div_par_parsone);
          //  div_par_persone.replace(/femme/gi, " ");
          var cible=element_crée;
          cible.appendChild(participant);
        }
      nb++;
      }
      
    
    }  }
  if (listParticipant.length > 3){

    confirm("votre liste de persone est impair veuillez confirmez");
    for( i=0;i<=Nb_Groupe;i++){
      var valeur;
      var element_crée;
      var sup_dans_liste_partcipant;
      let liste=[];
      let res=0;

      for (let nb = 0; nb <= T_groupe-1; nb++) {
        valeur=Math.floor(Math.random() * listParticipant.length);  
        liste.push(listParticipant[valeur]);
        sup_dans_liste_partcipant = listParticipant.indexOf(listParticipant[valeur]);
        listParticipant.splice(sup_dans_liste_partcipant, 1); //add in myIndex
        res++;
      }
      console.log(liste);
      //show
      for (let i = 0; i <1; i++) {
        element_crée = document.createElement('div');
        var  element_recuperer_dans_le_html=document.getElementById("result"); //creating element
        element_crée.className = 'resultat'; //adding class Name on the element
        element_crée.textContent+="GROUPE "+nb+"\r\n";//add the content in the element
        element_recuperer_dans_le_html.appendChild(element_crée);
          
        for (let j = 0; j < liste.length ; j++) {
          if(liste[j]==undefined){
            break;
          }
          //creation des element necesaire pour crée les div pour chaque nom
          var participant=document.createElement('div')
          var div_par_parsone=document.createTextNode(liste[j]+'\r\n');
          //ajout defant et pointage  sur le premier enfant courant crée
          
          // vaut mieux ajouter la class du sexe dans la ligne vide participant.className=" nom de la class";
          
          participant.appendChild(div_par_parsone);
          //  div_par_persone.replace(/femme/gi, " ");
          var cible=element_crée;
          cible.appendChild(participant);
        }
      nb++;
      }
      
    
    }
  }
 
}













function choixGroup(){
  var radioBTNNbGroup = document.getElementById("radioBTNNbGroup").style.background;
  var radioBTNTGroup = document.getElementById("radioBTNTGroup").style.background;
  var choix = 0;
  if (radioBTNNbGroup == ""){
    alert("Veuillez choisir soit la taille de vos groupes soit le nombre des groupes!!")
    return false;
  }
  if (radioBTNNbGroup == "white"){
    choix = "nbGroupe";
    console.log("choix nbgroup");
  } else {
    choix = "tGroupe";
    console.log("choix tgroup");
  }
  return choix
}

//#####------Griser champs non choisie Groups-----###########################################//*/

var sourceNbGroupe = document.getElementById("nbGroupe");
var sourceTGroupe = document.getElementById("tGroupe");
sourceNbGroupe.disabled = true;
sourceTGroupe.disabled = true;

function hideShowNbGroup(){
  var a = true;
  var btnNbGroup = document.getElementById("inputTGroupe");
  var btnTGroup = document.getElementById("inputNbGroupe");
  var colorOfBTNTGroup = document.getElementById("radioBTNTGroup");
  var colorOfBTNNbGroup = document.getElementById("radioBTNNbGroup");
  var valeur = document.getElementById("tGroupe");
  if (btnNbGroup.style.display != "none") {
      btnNbGroup.style.display = "none";
      btnTGroup.style.display = "block";
      colorOfBTNTGroup.style.background = "red";
      colorOfBTNNbGroup.style.background = "white";
      valeur.value = 2; 
    }
    if (a == true){
      sourceNbGroupe.disabled = false;
      sourceTGroupe.disabled = false;
    }
}

function hideShowTGroup(){
  var a = true;
  var btnTGroup = document.getElementById("inputNbGroupe");
  var btnNbGroup = document.getElementById("inputTGroupe");
  var colorOfBTNNbGroup = document.getElementById("radioBTNNbGroup");
  var colorOfBTNTGroup = document.getElementById("radioBTNTGroup");
  var valeur = document.getElementById("nbGroupe");

  if (btnTGroup.style.display != "none") {
      btnTGroup.style.display = "none";
      btnNbGroup.style.display = "block";
      colorOfBTNNbGroup.style.background = "red";
      colorOfBTNTGroup.style.background = "white";
      valeur.value = 2;
    }
    if (a == true){
      sourceNbGroupe.disabled = false;
      sourceTGroupe.disabled = false;
    }
}
