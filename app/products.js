        // Get the product name from the query parameter
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const productName = urlParams.get('producto');

        // Retrieve the product from localStorage based on the product name
        const storedProductosJSON = localStorage.getItem('productos');
        const storedProductos = JSON.parse(storedProductosJSON);
        const selectedProduct = storedProductos.find(product => product.producto === decodeURIComponent(productName));

        // Display the product details on the page
        if (selectedProduct) {
            document.getElementById("product-name").textContent = selectedProduct.producto;
            document.getElementById("product-description").textContent = selectedProduct.descripcion;
            document.getElementById("product-details").textContent = selectedProduct.detalle;
            document.getElementById("product-price").textContent = `Precio: $${selectedProduct.precio.toFixed(2)}`;


        } else {
            alert("Product not found in localStorage");
        }