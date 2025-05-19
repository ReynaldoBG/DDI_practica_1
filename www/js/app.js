function navigate(vista) {
  const container = document.getElementById('view-container');
  fetch(`views/${vista}.html`)
    .then(res => {
      if (!res.ok) throw new Error('Vista no encontrada');
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
      window.location.hash = vista; // para navegación con hash
    })
    .catch(err => {
      container.innerHTML = `<p class="error">Error al cargar la vista: ${vista}</p>`;
    });
}

// Carga vista inicial
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '') || 'inicio';
  navigate(hash);
});


function toggleMenu() {
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('menuToggle');

  nav.classList.toggle('show');

  // Cambiar ícono ☰ ↔ ✕
  toggle.textContent = nav.classList.contains('show') ? '✕' : '☰';
}


document.querySelectorAll('.navbar button').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = document.getElementById('navbar');
    nav.classList.remove('show');
  });
});
