

 // dans le html j'ai 2 button un précedent et un suivant 
 // a qui j'ai ajouté l'attribut onClick qui appelle la fonction slide 
 

var slide = ["../image/carteAgglo-communes.jpg", "../image/bassin-de-roubaix-tourcoing.jpg", "../image/charleroi.jpg", "../image/douai.jpg", 
"../image/maubeuge.jpg", "../image/perpignanjpg.jpg", "../image/tiziouzou.jpg","../image/wattignies.jpg", "../image/paris.jpg", "../image/marseille.jpg", 
"../image/carte-nimes.jpg", "../image/arles.png"]
// la liste slide récupére la source des images des villes dans le dossier image
var ville = ["Monpellier (surtout Bézier) par julien", "Roubaix christophe de lille", "Charleroi sans commentaire", "Douai Adonis", "Maubeuge théo", "Perpignan yanis B", "Tiziouzou Al Kadi", "Wattignies", "Paris élèves de mtp aucune originalité", "Marseille par Mtp aucune originalité ", 
    "Nimes Yanis.R de mtp enfin de l'originalité", "Arles directeur de lille"]
// nom des villes sans une liste


let numero = 0; // compteur initialisé à 0
let nv = 0; // la même 


function ChangeSlide(sens) {
    numero = numero + sens; // va soit augmenter le compteur soit le diminuer 
    nv = nv + sens;  // la même
    if (numero < 0) {// si numéro passe en negatif
        numero = slide.length - 1; // il l'image sera celui de la dernière ville 
        nv = ville.length-1}
    if (numero > slide.length - 1) {// si il le compteur déppase la dernière image de la liste
        numero = 0; // il retourne à la première
        nv = 0
    } 
    document.getElementById("slide").src = slide[numero]; // attribut la source de l'image
    document.getElementById('test').innerHTML = ville[nv];

}


let prece = document.getElementById("slide");


// prece.addEventListener("click", ChangeSlide(-1));


let bt = document.getElementById("monButton");
let tf = document.getElementById("corp");

//declaration des constantes pour le slider
const slideAlbum = ["Who's Next - Who", "The Infamous - Mobb Deep", "Graduation - Kanye West", "The Chronic - Dr Dre"," 2001 - Dr Dre","Or Noir - Kaaris","Good Kid, M.A.A.D City - Kendrick Lamar","YE - Kanye West","L'ensemble de la discographie de Daft Punk"];
const slideDescription = ["Plus Grand album de rock,","L'album Rap de la West-Cost","Kanye West rentre dans la légende","Dre définit la West Coast", "et sort l'album de rap le mieux produit de l'histoire",
"Bizon, Zoo, Ciroc = légendaire", "Kendric a son top selon moi","Son plus bel album","L'HISTOIRE"];
let i = 0;

function changeSlideAlbum(direction){

    
    i = i + direction;
    
    if (i < 0){
        i = slideAlbum.length - 1;
       // i = slideDescription.length - 1;
    }
    if (i > slideAlbum.length - 1){
        i = 0;

    }
    
    document.getElementById('albumSlide').innerHTML = slideAlbum[i];
    document.getElementById('description').innerHTML = slideDescription[i];
}

// Permet la mise en place du timer
setInterval("changeSlideAlbum(1)", 2100);