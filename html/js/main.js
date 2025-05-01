// function cargarProductos() {
//     fetch("https://api.escuelajs.co/api/v1/products")
//         .then(response => response.json())
//         .then(data => {
//             mostrarProductos(data);
//         })
//         .catch(error => {
//             console.error("Error al cargar productos:", error);
//         });
// }

// function mostrarProductos(productos) {
//     const contenedor = document.getElementById("productsContainer");
//     contenedor.innerHTML = ""; // limpiar contenido previo

//     productos.forEach(producto => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//             <h3>${producto.title}</h3>
//             <p>Precio: $${producto.price}</p>
//             <img src="${producto.images[0]}" alt="${producto.title}" width="200">
//             <hr>
//         `;
//         contenedor.appendChild(div);
//     });
// }

// // Cuando se cargue la página, asignamos la función al botón
// document.addEventListener("DOMContentLoaded", function() {
//     const boton = document.getElementById("load-Products");
//     boton.addEventListener("click", cargarProductos);
// });

// main.js

// Función que maneja el evento click del botón "Load Products"
// document.addEventListener('DOMContentLoaded', () => {
//     const loadButton = document.querySelector('button'); // Seleccionamos el botón por su etiqueta (en este caso el primer botón)
  
//     if (loadButton && loadButton.textContent.trim() === 'Load Products') {
//       loadButton.addEventListener('click', loadProducts);
//     }
//   });

// Cuando se cargue la página, asignamos la función al botón
document.addEventListener("DOMContentLoaded", function() {
     const boton = document.getElementById("load-Products");
     boton.addEventListener("click", loadProducts);
 });

  
  // Función para hacer la llamada a la API y mostrar los productos
  function loadProducts() {
    const apiUrl = 'https://api.escuelajs.co/api/v1/products'; // URL de la API
  
    // Usamos fetch para hacer la solicitud GET a la API
    fetch(apiUrl)
      .then(response => response.json()) // Convertimos la respuesta a formato JSON
      .then(products => {
        displayProducts(products); // Llamamos a la función para mostrar los productos
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error); // Mostramos cualquier error en la consola
      });
  }
  
  // Función para mostrar los productos en el HTML
  function displayProducts(products) {
    const productList = document.querySelector('#product-list'); // Asumimos que tienes un contenedor con el ID 'product-list'
    productList.innerHTML = ''; // Limpiamos cualquier contenido previo
  
    // Iteramos sobre la lista de productos y los mostramos
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product'); // Añadimos una clase CSS para los productos
      productElement.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Precio: $${product.price}</p>
      `;
      productList.appendChild(productElement); // Añadimos el producto al contenedor
    });
  }
  