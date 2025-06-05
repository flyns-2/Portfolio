let cv  = document.getElementById("gg"); // récupère l'élément d'id gg
console.log(cv); 
let mcv  = document.getElementById("mCv") // récupére l'élément d'id mCv
mcv.style.color = "red"

cv.addEventListener("mouseover", function( ){
    cv.style.backgroundColor = 'blue'; // au passge de la souris transforme la couleur de fond en rouge
    mcv.style.color = "white";
})

cv.addEventListener("mouseout", function(){
    cv.style.backgroundColor = "white" // au départ de la souris transfomre la couleur de fond en blanc
    mcv.style.color = "orange";
})



const bas = document.getElementById('haut'); // scroll jusqua l'id bas qui corespond aux bas de la page
bas.addEventListener('click', ()=>{location.href='#bas'})

const haut = document.getElementById("bas") // scroll jusqu'a l'id haut qui corespond aux haut de la page
haut.addEventListener('click', () =>{location.href="#haut"})



const projet = document.getElementById("projets") // au click ca nous redirige vers la page projets
projet.addEventListener('click', () =>{location.href='./page/projects.html'})

const propos = document.getElementById("propos") // au click ca nous redirige vers la page about-me
propos.addEventListener("click", () => { location.href ='./page/about-me.html'})

const contact = document.getElementById("contacts") // redirige vers la page contact
contact.addEventListener("click", () =>{
    location.href = './page/contact.html'
})

