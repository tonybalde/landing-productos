fetch("./data/products.json")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Algo fue mal con la API fetch!");
    }
  })
  .then((data) => {
    const productsJSON = JSON.stringify(data);
    console.debug(productsJSON);
    localStorage.setItem('productos', productsJSON);

    // Ahora, la informacion del archivo products.JSON esta en la almacenada en la variable productsJSON
    // Puedo acceder a productsJSON para buscar la info de los productos.
  })
  .catch((error) => {
    console.error(error);
  });


// Ahora puedo recuperar la info de localStorage cuando lo necesite
// Puedo recuperar la info y pasarla de nuevo a un array:
const storedProductosJSON = localStorage.getItem('productos');
const storedProductos = JSON.parse(storedProductosJSON);

// Funcion que maneja el click del signo "+" cuando es clickeado
function showProductDetails(productCode) {
    // Busca el producto en base al codigo del mismo
    const selectedProduct = storedProductos.find(product => product.codigo === productCode);

    if (selectedProduct) {
        // "codifica" el nombrel del producto para la url de navegacion que se va a usar en la pagina product-details.html
        const encodedProductName = encodeURIComponent(selectedProduct.producto);
        window.location.href = `product-details.html?producto=${encodedProductName}`;
    } else {
        alert("Producto no encontrado en el localStorage");
    }
}


const productList = document.getElementById("productList");

storedProductos.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "gap-2");

    // Pasa el codigo para usarse con la funcion showProductDetails cuando se hace click en el signo "+"
    li.innerHTML = `
        <div><img class="product-image-small" src="${product.imagen}">
        </div>
        <div class="product-description-index d-flex justify-content-start flex-column gap-2">
            <h4>${product.producto}</h4>
            <span class="text-left">${product.descripcion}</span>
        </div>
        <a href="#" onclick="showProductDetails(${product.codigo})"><span class="badge bg-primary rounded-pill">+</span></a>
    `;

    productList.appendChild(li);
});
