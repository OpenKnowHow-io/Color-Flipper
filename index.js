const button = document.getElementById("btn-id");
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

button.addEventListener("click", function(){
    // Étape 1 : Choisir une couleur au hasard
    const randomNumber = Math.floor(Math.random() * colors.length);
    const chooseColor = colors[randomNumber];
    // Étape 2 : Changer la couleur de fond de la page
    const body = document.querySelector("body");
    body.style.backgroundColor = chooseColor;
    //Étape 3 : Changer la couleur du texte
    const textColor = document.querySelector("body main .container .color-container span.color");
    textColor.style.color = chooseColor;
})