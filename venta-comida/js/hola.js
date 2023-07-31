// Obtener todos los botones "Ordenar Ahora"
const orderButtons = document.querySelectorAll('.order-btn');

// Agregar un evento de clic a cada botón
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Obtener el nombre del artículo de la sección del menú
    const foodItem = button.closest('.food-item');
    const itemName = foodItem.querySelector('h3').innerText;

    // Mostrar un mensaje de alerta con el nombre del artículo seleccionado
    alert(`Has añadido "${itemName}" al carrito de compras.`);
  });
});