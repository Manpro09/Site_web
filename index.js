// Récupération des éléments HTML
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginResultDiv = document.getElementById('login-result');

// Fonction pour envoyer une requête AJAX avec les données du formulaire
function sendLoginForm() {
  // Création de l'objet XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Fonction de callback appelée lorsque la requête est terminée
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Affichage du résultat dans la page
        loginResultDiv.innerHTML = xhr.responseText;
      } else {
        // Affichage d'un message d'erreur
        loginResultDiv.innerHTML = 'Une erreur est survenue lors de la requête.';
      }
    }
  };

  // Envoi de la requête POST avec les données du formulaire
  xhr.open('POST', '/htbin/login.py');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('username=' + encodeURIComponent(usernameInput.value) + '&userpwd=' + encodeURIComponent(passwordInput.value));

}

// Fonction de callback appelée lors de la soumission du formulaire
function submitLoginForm(event) {
  // Empêcher l'envoi du formulaire par défaut
  event.preventDefault();

  // Envoyer une requête AJAX avec les données du formulaire
  sendLoginForm();
}

// Ajout de l'événement de soumission du formulaire
loginForm.addEventListener('submit', submitLoginForm);

// Ajout de l'événement de soumission du formulaire avec la touche "Entrée"
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13 && document.activeElement === usernameInput) {
    event.preventDefault();
    passwordInput.focus();
  } else if (event.keyCode === 13 && document.activeElement === passwordInput) {
    event.preventDefault();
    sendLoginForm();
  }
});


let images = ["images/fond1.jpg", "images/basilique.jpg", "images/cathedrale.jpg"];
let currentIndex = 0;
let intervalId;

function startSlideshow() {
  intervalId = setInterval(changeImage, 4000);
}

function stopSlideshow() {
  clearInterval(intervalId);
}

function changeImage() {
  let imageElement = document.querySelector(".lien");
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  let nextImage = images[currentIndex];
  imageElement.style.backgroundImage = "url('" + nextImage + "')";
}

startSlideshow();
