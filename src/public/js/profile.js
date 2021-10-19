const cerrarSesion = document.getElementById('cerrar_sesion');
cerrarSesion.addEventListener('click', () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
});