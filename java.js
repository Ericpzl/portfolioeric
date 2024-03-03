function toggleMenu() {
  var navList = document.querySelector('.nav-list');
  navList.classList.toggle('show');
}

function closeMenu() {
  var navList = document.querySelector('.nav-list');
  navList.classList.remove('show');
}

/* este menu hamburguesa fue hecho con bastante ayuda porque a la hora de intentarlo daba muchos fallos */ 

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var errorMessage = document.getElementById("error-message");

  errorMessage.innerHTML = ""; 

  if (name === "" || email === "" || message === "") {
      errorMessage.innerHTML = "Por favor, completa todos los campos.";
      return false;
  }

 
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      errorMessage.innerHTML = "Por favor, introduce un correo electrónico válido.";
      return false;
  }



  alert("Formulario enviado correctamente.");
  return true;
}