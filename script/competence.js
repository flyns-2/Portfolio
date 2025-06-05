// Page réalisé a la fois seul et grâce a de l'aide sur internet nottament pour la boucle for 
// Pas de css pour celui ci il faut encore l'améliorer

// on récupère l'id de l'input et on lui applique l'événement keyup
document.getElementById("test").addEventListener("keyup", (e) => {
 
    //on récupère le mot tapé, et on met tout en lowercase
  
    let mot = e.target.value.toLowerCase();

    
    //on récupère tous les li qui ont le même nom de classe et on les mets
    //dans une Collection let language = e.target.value.toLowerCase();
    let listMot = document.getElementsByClassName("name")
    //console.log(CollectionLangage)
   
    // (si la collection à X langage, alors cela bouclera X fois)
    for(let i = 0; i < listMot.length; i++){
          
          // on récupère la méthode textContent qui récupère le contenu de
          // notre texte et on le met en lowercase pour comparer dans le if
          const MotLangage = listMot[i].textContent.toLowerCase()
          
          // on compare si la suite de mot que l'on récupère (language)
          // est INCLU dans le MotLangage
          // Alors on laisse le display block pour qu'il soit visible
          if(MotLangage.includes(mot)){
            listMot[i].style.display = "block"
          }
          
          // sinon on retire le display block
          else{
            listMot[i].style.display = "none"
          }
      }
  })


  

document.getElementByIdfunction("oui").addEventListener("keyup",(event) =>  {
  let ajout = e.target.value.toLowerCase()  
  
  // crée un nouvel élément div
  var div = document.createElement("a");
  // et lui donne un peu de contenu
  var nouveau = document.createTextNode(ajout.textContent);
  // ajoute le nœud texte au nouveau div créé
  div.appendChild(nouveau);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var divActuelle = document.getElementById("div1");
  document.body.insertBefore(div, divActuelle);

})


