document.getElementsByClassName("btn")[0].addEventListener("click",(event) =>  {
    event.preventDefault(); // permet de bloque le rechargement de la page 
    const userName = "julien"; // bon nom d'utilisateur 
    const passWord = "lisa"; // bon mdp
    
    var test = document.getElementById("username"); // récupére l'élément html d'id username
    var log = document.getElementById("password"); //  la même avec l'id password
    var error = document.getElementById("error-message"); // la même avec l'id error-message
    
    console.log(log);
    console.log(test);
    
    if (test.value == "julien" && log.value == "lisa"){ // vérifie si le mdp et le nomUtilisateur sont bon 
        window.location.href = "../index.html"
    }
    else{
        error.style.display = 'block' // sinon 	rend comme un élément de niveau bloc.
    }
    
    })