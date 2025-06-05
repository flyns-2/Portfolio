const button = document.getElementById("choix");
 
 
button.addEventListener("click", updateButton);
// redirige l'utilisateur vers la page qui détaille les cookies  
function updateButton() {
  if (button.value === "Je choisis") {
       button.value == "choix"
  } else {
    window.location.href = "../page/redirection.html"
  }
}
 
 
const buttonNon = document.getElementById("non")
 
buttonNon.addEventListener("click",non)
 

// Gère la partie refus des cookies retourne l'utilisateur sur un autre site 
function non(){ 
  if (buttonNon.value === "Non merci"){
    buttonNon.value == "non"
  }else{
    window.location.href = "https://www.youtube.com/results?search_query=techno";
  }
}
 
 
const buttonOk = document.getElementById("ok");
buttonOk.addEventListener("click",oui)
 
// le laisse sur cette page
function oui(){
  if (buttonOk.value === "j'accepte"){
    buttonOk.value == "ok"
  }else{
    window.location.href = "../page/index.html";
  }
}
 
 
 
