// Desplegable para el menú
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Validación del formulario
document.getElementById('form-reportar').addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    if (!nombre || !descripcion) {
        e.preventDefault();
        alert("Por favor, completa todos los campos.");
    }
});
