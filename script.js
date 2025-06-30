// console.log("Mon script est bien chargé !");
// Fonctionalité 1
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.

function footerClick() {
  const footer = document.querySelector("footer");
  // console.log("footer est sélectionné")
  if (footer) {
    footer.addEventListener("click", function () {
      console.log("clique");
    });
  }
}

// footerClick();

// Fonctionnalité 1-bis
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

function countFooterClic() {
  const footer = footerClick();
  let count = 0;
  if (footer) {
    count++;
    console.log(`clic numéro ${count}`);
  };
}
countFooterClic();
