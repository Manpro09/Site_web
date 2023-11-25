// Récupération des éléments HTML
const form = document.getElementById('register-form');
const lastNameInput = document.getElementById('lastname');
const firstNameInput = document.getElementById('firstname');
const birthdateInput = document.getElementById('birthdate');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('userpwd');
const emailInput = document.getElementById('useremail');

// Fonction pour valider le format de la date de naissance (jj/mm/aaaa)
function isValidDate(dateString) {
  // Vérification du format de la date
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
    return false;
  }
  // Conversion de la date en objet Date
  const dateParts = dateString.split("/");
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);
  const date = new Date(year, month, day);
  // Vérification de la validité de la date
  if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
    return false;
  }
  return true;
}

// Fonction pour valider le mot de passe
function isValidPassword(password) {
  // Vérification de la longueur du mot de passe
  if (password.length < 8) {
    return false;
  }
  // Vérification de la présence d'au moins une majuscule, une minuscule et un chiffre
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    return false;
  }
  return true;
}

// Fonction pour valider l'adresse email
function isValidEmail(email) {
  // Vérification du format de l'adresse email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return false;
  }
  return true;
}

function showError(input, message) {
  input.setCustomValidity(message);
  input.reportValidity();
}

function showSuccess(input) {
  input.setCustomValidity('');
}

function validateForm() {
  let isValid = true;

  if (lastNameInput.value.trim() === '' || firstNameInput.value.trim() === '') {
    showError(lastNameInput, 'Veuillez saisir vos noms...');
    isValid = false;
  } else {
    showSuccess(lastNameInput);
  }

  if (!isValidDate(birthdateInput.value)) {
    showError(birthdateInput, 'Veuillez saisir une date de naissance valide (jj/mm/aaaa)...');
    isValid = false;
  } else {
    showSuccess(birthdateInput);
  }

  if (usernameInput.value.length < 6) {
    showError(usernameInput, 'Le nom d\'utilisateur doit contenir au moins 6 caractères...');
    isValid = false;
  } else {
    showSuccess(usernameInput);
  }

  if (!isValidPassword(passwordInput.value)) {
    showError(passwordInput, 'Le mot de passe doit contenir au moins 8 caractères avec une majuscule, une minuscule et un chiffre...');
    isValid = false;
  } else {
    showSuccess(passwordInput);
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Veuillez saisir une adresse email valide...');
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  return isValid;
}

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});



