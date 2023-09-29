const productos = [
    {
        producto: "Microfono HyperX QuadCast S Streaming",
        descripcion: "Microfono HyperX QuadCast S Streaming Condensador USB C PC-PS4 RGB",
        imagen: "../images/microfono-hyperx.jpg",
        detalle: "Con el micrófono HyperX descubrirás una nueva forma de captar y emitir audios. Fiel reflejo de la realidad. Ideal para varias actividades. Te brindará un sonido de calidad y conseguirás la nitidez de las voces, Un formato a tu medida, Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales.Diseño eficaz, Dejá de dar tantas vueltas e invertí en la versatilidad de este producto, ya que de acuerdo a tu necesidad, podrás intercambiar los patrones polares las veces que quieras. ¡Animate y empezá a disfrutar de la herramientas estándar del mercado!",
        precio: 111234.00,
        puntuacion: "*****",
        url: "micro.html"
    },
    {
        producto: "Procesador AMD RYZEN 3 3200G",
        descripcion: "Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
        imagen: "../images/micro-ryzen-3.jpg",
        detalle: " 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler DETALLES",
        precio: 84534.00,
        puntuacion: "*****",
        url: "procesador.html"
    },
    {
        producto: "Placa de Video GTX 1650 4GB GDDR6",
        descripcion: "Placa de Video ASUS GeForce GTX 1650 4GB GDDR6 DUAL V2",
        imagen: "../images/gtx-1650.jpg",
        detalle: "Placa de Video ASUS GeForce GTX 1650 4GB GDDR6 DUAL V2 DETALLESS",
        precio: 258234.00,
        puntuacion: "*****",
        url: "placavideo.html"
    },
    {
        producto: "Disco Sólido M.2 1TB XPG",
        descripcion: "Disco Sólido SSD M.2 ADATA 1TB XPG Spectrix S40G RGB 3500MB/s NVMe PCI-E X4",
        imagen: "../images/disco-solido.jpg",
        detalle: "Disco Sólido SSD M.2 ADATA 1TB XPG Spectrix S40G RGB 3500MB/s NVMe PCI-E X4 DETALLESS",
        precio: 68934.00,
        puntuacion: "*****",
        url: "discosolido.html"
    },
    {
        producto: "Fuente Be Quiet 1000W 80 Plus Gold",
        descripcion: "Fuente Be Quiet 1000W 80 Plus Gold PURE POWER 11 Full Modular",
        imagen: "../images/fuente-atx.jpg",
        detalle: "Fuente Be Quiet 1000W 80 Plus Gold PURE POWER 11 Full Modular DETALLES",
        precio: 97834.00,
        puntuacion: "*****",
        url: "fuenteatx.html"
    },
    {
        producto: "Mother MSI B450M-A PRO MAX",
        descripcion: "Mother MSI B450M-A PRO MAX",
        imagen: "../images/mother-msi.jpg",
        detalle: "Placa Madre MSI B450M-A PRO MAX DETALLES",
        precio: 87934.00,
        puntuacion: "*****",
        url: "mother.html"
    },
]

// Convierte el array de 'productos' a una cadena string JSON 
const productosJSON = JSON.stringify(productos);

// Guarda la cadena JSON en una llave llamada 'productos' en el localStorage
localStorage.setItem('productos', productosJSON);

// Ahora puedo recupera la info de localStorage cuando lo necesite
// Puedo recuperar la info y pasarla de nuevo a un array:
const storedProductosJSON = localStorage.getItem('productos');
const storedProductos = JSON.parse(storedProductosJSON);

// 'storedProductos' ahora contiene el array de productos del localStorage




const productList = document.getElementById("productList");

productos.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    li.innerHTML = `
        <div class="product-description-index">
            <h4>${product.producto}</h4>
            <span class="text-right">${product.descripcion}</span>
        </div>
        <a href=${product.url}><span class="badge bg-primary rounded-pill">+</span></a>
        `;
    productList.appendChild(li);
});