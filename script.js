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
  // si footer existe, compte le nombre de clics
  if (footer) {
    count++;
    console.log(`clic numéro ${count}`);
  };
}
countFooterClic();


// Fonctionnalité 2
// clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

function toggleNavbar() {
  // sélectionne id du navbar
  const navbar = document.getElementById("navbarHeader");
  // sélectionne le bouton de la navbar
  const button = document.querySelector(".navbar-toggler");
  // si navbar et button existenet, cliquer pour cacher ou faire apparaitre les informations
  if (navbar && button) {
    button.addEventListener("click", function () {
      navbar.classList.toggle("collapse");
    });
  }
}

toggleNavbar();

// Fonctionnalité 3
// clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)

function editHTML() {
  // sélectionne le bouton edit
  const buttonCard1 = document.querySelector(".btn-group:first-of-type");
  // console.log("sélect:", buttonCard1)
  const buttonEdit = buttonCard1.querySelector("button:nth-of-type(2)");
  // console.log("edit", buttonEdit);
  if (buttonEdit) {
    buttonEdit.addEventListener("click", function () {
      // console.log("button edit cliqué")
      // ajoute text en rouge avec bootstrap
      buttonEdit.classList.add("text-danger")
    })
  }
}

editHTML();