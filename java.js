function mostrarDetalles(id) {
  const detalles = document.getElementById(id);
  detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
}

function enviarComentario() {
  const comentario = document.getElementById('comentario').value.trim();
  if (!comentario) {
      alert('Por favor, escribe tu opinión.');
  } else {
      alert('Gracias por tu comentario.');
  }
}

