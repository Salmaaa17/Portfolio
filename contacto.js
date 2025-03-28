// CONTACTO ------ Formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_os07w38', 'template_2ppmd5e', this)
        .then(function() {
            document.getElementById('mensaje-estado').innerText = "✅ ¡Mensaje enviado correctamente!";
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('mensaje-estado').innerText = "❌ Error al enviar el mensaje. Inténtalo más tarde.";
            console.log('FAILED...', error);
        });
  });