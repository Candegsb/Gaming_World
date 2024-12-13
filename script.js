// Inicializa la variable de índice
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex); 
});

// Para cambiar de diapositiva
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Función para mostrar la diapositiva actual
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Función principal para mostrar diapositivas
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { slideIndex = 0; } // Reinicia si supera el índice
  if (n < 0) { slideIndex = slides.length - 1; } // Va al final si es negativo

  // Oculta todas las diapositivas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Quita la clase 'active' de todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Muestra la diapositiva actual y marca el punto activo
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  // Inicializar Parsley.js para la validación del formulario
  $('#contact-form').parsley();
});

// Validación personalizada para el campo de email
window.Parsley.addValidator('emailDomain', {
  validateString: function(value) {
      return value.includes('@example.com');
  },
  messages: {
      en: 'The email must be from @example.com'
  }
});

document.addEventListener("DOMContentLoaded", function() {
  $('#contact-form').parsley();
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  const message = document.getElementById('message').value;
  if (!message.trim()) {
      alert('Please write a message.');
      event.preventDefault(); // Evita el envío del formulario (ya que no es "real")
  }
});