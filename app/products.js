     const queryString = window.location.search;
     const urlParams = new URLSearchParams(queryString);
     const productName = urlParams.get('producto');

     // Recupera el producto del localStorage en based al nombre del producto
     const storedProductosJSON = localStorage.getItem('productos');
     const storedProductos = JSON.parse(storedProductosJSON);
     const selectedProduct = storedProductos.find(product => product.producto === decodeURIComponent(productName));

     function mapRatingToEmojis(rating) {
        const ratingToEmojis = {
            '*****': '⭐⭐⭐⭐⭐',
            '****': '⭐⭐⭐⭐',
            '***': '⭐⭐⭐',
            '**': '⭐⭐',
            '*': '⭐',
        };
        
        return ratingToEmojis[rating] || ''; // Devuelve los emojis o un array vacio
    }

     // Muestra el detalle del producto
     if (selectedProduct) {
         document.getElementById("product-name").textContent = selectedProduct.producto;
         document.getElementById("product-description").textContent = selectedProduct.descripcion;
         document.getElementById("product-price").textContent = `Precio: $${selectedProduct.precio.toFixed(2)}`;
         
         const ratingEmojis = mapRatingToEmojis(selectedProduct.puntuacion);
         document.getElementById("product-rating").textContent = `Puntuación: ${ratingEmojis}`;

         document.getElementById("product-detail").textContent = selectedProduct.detalle;

         // Muestra la imagen del producto
         const productImage = document.getElementById("product-image");
         productImage.src = selectedProduct.imagen;
         productImage.alt = selectedProduct.producto;
     } else {
         alert("Product not found in localStorage");
     }

