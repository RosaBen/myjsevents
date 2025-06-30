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

// ---------------------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------------------

// Fonctionnalité 3
// clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)

function editHTML() {
  // sélectionne le bouton edit
  const card1 = document.querySelectorAll(".card-body")[0];
  // console.log("sélectcard:", card1)
  const cardtext = card1.querySelector(".card-text");
  // console.log("sélecttextt:", cardtext)
  const buttonEdit = card1.querySelector("button:nth-of-type(2)");
  // console.log("editbutton", buttonEdit);
  if (buttonEdit) {
    buttonEdit.addEventListener("click", function () {
      // console.log("button edit cliqué")
      // ajoute text en rouge avec bootstrap
      cardtext.classList.add("text-danger")
    })
  }
}

editHTML();
// --------------------------------------------------------------------------------------------

// Fonctionnalité 4
// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant

// avec class toggle 
// function editCSS1() {
//   const card2 = document.querySelectorAll(".card-body")[1];
//   const cardtext = card2.querySelector(".card-text");
//   const buttonEdit = card2.querySelector("button:nth-of-type(2)");
//   if (buttonEdit && cardText) {
//     buttonEdit.addEventListener("click", function () {
//       cardtext.classList.toggle("text-success");
//     });
//   }
// }

// editCSS1();


// sans class toggle

function editCSS2() {
  const cardBody2 = document.querySelectorAll(".card-body")[1];
  const buttonEdit = cardBody2.querySelector("button:nth-of-type(2)");
  const cardText = cardBody2.querySelector(".card-text");
  if (buttonEdit && cardText) {
    buttonEdit.addEventListener("click", function () {
      if (cardText.style.color === 'green') {
        cardText.style.color = '';
      } else {
        cardText.style.color = 'green';
      }
    });
  }
}

editCSS2();


// --------------------------------------------------------------------------------------------

// Fonctionnalité 5
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
// https://www.w3schools.com/jsref/event_ondblclick.asp
// https://www.w3schools.com/jsref/met_element_getattribute.asp
// https://www.w3schools.com/jsref/met_element_removeattribute.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createattribute2


function toggleLink() {
  const head = document.querySelector("head");
  const link = head.querySelector("link");
  // console.log("link", link)
  const attrValue = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  const navbar = document.querySelector("header");

  navbar.addEventListener("dblclick", function () {
    currentAttr = link.getAttribute("href");
    if (currentAttr) {
      link.removeAttribute("href");
    } else {
      link.setAttribute("href", attrValue);
    }
  })

}

toggleLink();
// --------------------------------------------------------------------------------------------

// Fonctionnalité 6 
// si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle - ci va se réduire.Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles.Cette fonction sera réversible: s'il repasse sa souris, la card redevient normale !


function changeCardContainer(cardContainer) {
  const cardText = cardContainer.querySelector(".card-text");
  const cardImage = cardContainer.querySelector(".card-img-top");
  cardText.classList.add("changeStyle");
  cardText.style.display = "none";
  cardImage.style.width = "20%";
}

function restoreCardContainer(cardContainer) {
  const cardText = cardContainer.querySelector(".card-text");
  const cardImage = cardContainer.querySelector(".card-img-top");
  cardText.style.display = "";
  cardImage.style.width = "";
  cardText.classList.remove("changeStyle");
}

function toggleView() {
  const cardContainer = document.querySelectorAll(".card");
  cardContainer.forEach(card => {
    const buttonView = card.querySelector("button:nth-of-type(1)");
    const cardText = card.querySelector(".card-text");
    buttonView.addEventListener("mouseover", function () {
      const isHidden = cardText.classList.contains("changeStyle");

      if (isHidden) {
        restoreCardContainer(card);
      } else {
        changeCardContainer(card);
      }
    })
  });

}

toggleView();

// --------------------------------------------------------------------------------------------
// Fonctionnalité 7
//  si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

const buttonsContainer = document.querySelector(".jumbotron");
const previousBtn = buttonsContainer.querySelectorAll(".btn")[0];
const nextBtn = buttonsContainer.querySelectorAll(".btn")[1];
const cardsParent = document.querySelector(".album .row");
const cardsContainer = document.querySelectorAll(".col-md-4");


nextBtn.addEventListener("click", function () {
  const firstCard = cardsParent.querySelector(".col-md-4");
  cardsParent.appendChild(firstCard);
})

previousBtn.addEventListener("click", function () {
  const cards = cardsParent.querySelectorAll(".col-md-4");
  const lastCard = cards[cards.length - 1];
  cardsParent.insertBefore(lastCard, cardsParent.firstElementChild);
})
// --------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------




