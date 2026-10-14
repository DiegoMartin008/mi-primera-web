const boton = document.querySelector('#saludo');
const mensaje = document.querySelector('#mensaje');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Juegos de Angry Birds!';
});
