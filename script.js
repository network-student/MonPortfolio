// Message dans la console
console.log("Portfolio chargé avec succès !");

// Bouton "Voir mes projets"
const bouton = document.querySelector("button");

bouton.addEventListener("click", function () {
    document.querySelector("#projets").scrollIntoView({
        behavior: "smooth"
    });
});