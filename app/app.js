const productos = [
    {   
        codigo: 1,
        producto: "Microfono HyperX QuadCast S Streaming",
        descripcion: "Microfono HyperX QuadCast S Streaming Condensador USB C PC-PS4 RGB",
        imagen: "./images/microfono-hyperx.jpg",
        detalle: "Con el micrófono HyperX descubrirás una nueva forma de captar y emitir audios. Fiel reflejo de la realidad. Ideal para varias actividades. Te brindará un sonido de calidad y conseguirás la nitidez de las voces, Un formato a tu medida, Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales.Diseño eficaz, Dejá de dar tantas vueltas e invertí en la versatilidad de este producto, ya que de acuerdo a tu necesidad, podrás intercambiar los patrones polares las veces que quieras. ¡Animate y empezá a disfrutar de la herramientas estándar del mercado!",
        precio: 111234.00,
        puntuacion: "*****"
    },
    {
        codigo: 2,
        producto: "Procesador AMD RYZEN 3 3200G",
        descripcion: "Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
        imagen: "./images/micro-ryzen-3.jpg",
        detalle: "Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 3 3200G, diseñado para brindarte un rendimiento óptimo en tus partidas. Con sus 4 núcleos y una frecuencia máxima de 4 GHz, disfrutarás de una velocidad y fluidez excepcionales en tus juegos favoritos. Además, su arquitectura x86-64 te garantiza una compatibilidad amplia con diversos sistemas y aplicaciones. Este procesador es compatible con memorias RAM DDR4 y soporta hasta 64 GB, lo que te permitirá expandir tu capacidad de almacenamiento y mejorar el rendimiento de tu equipo. Gracias a su zócalo AM4, podrás instalarlo fácilmente en una amplia variedad de placas base. La Radeon Vega 8 Graphics integrada te brinda una calidad gráfica sorprendente, permitiéndote disfrutar de tus juegos con una resolución y detalle impresionantes. Además, al ser un procesador desbloqueado, tendrás la libertad de realizar overclocking y personalizar su rendimiento según tus necesidades. Con una potencia de diseño térmico de 65 W, este procesador AMD Ryzen 3 3200G garantiza un funcionamiento eficiente y una menor generación de calor, lo que se traduce en un menor consumo de energía y una vida útil más prolongada para tu equipo. No esperes más para llevar tu experiencia de juego al siguiente nivel con este potente procesador AMD Ryzen 3 3200G.",
        precio: 84534.00,
        puntuacion: "*****"
    },
    {
        codigo: 3,
        producto: "Placa de Video GTX 1650 4GB GDDR6",
        descripcion: "Placa de Video ASUS GeForce GTX 1650 4GB GDDR6 DUAL V2",
        imagen: "./images/gtx-1650.jpg",
        detalle: "Motor Gráfico NVIDIA® GeForce GTX 1650, Estándar de Bus PCI Express 3.0, OpenGL®4.6 Memoria de Video 4GB GDDR6, Reloj del Motor Modo OC: 1620 MHz(Boost Clock), Modo predeterminado: 1590 MHz(Boost Clock), Núcleo CUDA 896, Velocidad de Memoria 12 Gbps, Interfaz de Memoria 128-bit, Resolución Máxima Digital 7680 x 4320, Interfaz: 1 (DVI-D Nativo), 1 (HDMI 2.0b Nativo), 1 (DisplayPort 1.4a Nativo), Soporte HDCP (2.2), Soporte de Pantalla Máximo: 3, Soporte NVlink/ Crossfire No, Accesorios: Manual de Configuración Rápida, Software, ASUS GPU Tweak III & GeForce Game Ready Driver & Studio Driver: por favor, descarga todo el software desde el sitio de soporte. Dimensiones: 21.2 x 12.1 x 4 cm, PSU Recomendada: 300W, Conectores de Energía: 1 x 6-pin, 2 Ranuras",
        precio: 258234.00,
        puntuacion: "****"
    },
    {
        codigo: 4,
        producto: "Disco Sólido M.2 1TB XPG",
        descripcion: "Disco Sólido SSD M.2 ADATA 1TB XPG Spectrix S40G RGB 3500MB/s NVMe PCI-E X4",
        imagen: "./images/disco-solido.jpg",
        detalle: "Con la unidad en estado sólido Adata vas a incrementar la capacidad de respuesta de tu equipo. Invertí en velocidad y eficiencia para el inicio, la carga y la transferencia de datos. El almacenamiento que necesitás. Utilizá al máximo su almacenaje de 1TB, el cual te permite guardar una gran cantidad de documentos, películas, música y todos los archivos que necesités con el fin de simplificar tus tareas diarias. Más velocidad a tu alcance. Este disco transfiere datos a través de sus interfaces PCIe 3.0 y NVMe 1.3, lo que te permite transmitir una mayor cantidad de información de una sola vez. Garantía del vendedor: 12 meses",
        precio: 68934.00,
        puntuacion: "*****"
    },
    {
        codigo: 5,
        producto: "Fuente Be Quiet 1000W 80 Plus Gold",
        descripcion: "Fuente Be Quiet 1000W 80 Plus Gold PURE POWER 11 Full Modular",
        imagen: "./images/fuente-atx.jpg",
        detalle: "Con esta fuente de alimentación podrás asegurar la corriente continua y estable de tu computadora de escritorio y optimizar el funcionamiento de sus componentes. Eficiencia garantizada. Además, con su potencia de 1000 W tendrás la energía suficiente para jugar y mirar tus series y videos favoritos por horas con un alto rendimiento. Control de temperatura. A través de su sistema de refrigeración, podrás mantener la temperatura ideal de sus componentes y evitar su sobrecalentamiento.",
        precio: 97834.00,
        puntuacion: "*****"
    },
    {
        codigo: 6,
        producto: "Mother MSI B450M-A PRO MAX",
        descripcion: "Mother MSI B450M-A PRO MAX",
        imagen: "./images/mother-msi.jpg",
        detalle: "Marca: MSI, Modelo: B450M-A PRO MAX, MEMORIA DDR4: 1866/ 2133/ 2400/ 2667Mhz (por JEDEC), Para AMD Ryzen Gen3 (R5/R7/R9) 2667/ 2800/ 2933/ 3000/ 3066/ 3200/ 3466/ 3733/ 3866/ 4000/ 4133 MHz (por A-XMP OC MODE). Para AMD Otra CPU 2667/ 2800/ 2933/ 3000/ 3066/ 3200/ 3466 MHz (por A-XMP OC MODE) OCKET: AM4- CPU (MAX SOPORTADO): RYZEN - PUERTO M.2: 1, PUERTOS SERIE (FRONTAL): 1 - CONJUNTO DE CHIPS: Conjunto de chips AMD B450 - CANAL DE MEMORIA: Doble - PUERTOS USB 3.2 (FRONTAL): 2 (Gen1, tipo A) - PUERTOS USB 3.2 (TRASEROS): 4(Gen1, Tipo A - MAX MEMORIA (GB): 32 - PCI-EX16: 1 - GENERACIÓN PCI-E: Gen3 - PCI-EX1: 1 - SATAIII: 4 - PUERTOS USB 2.0 (FRONTAL): 4 - LAN: 1x Realtek 8111H - TPM: 1 - PUERTOS USB 2.0 (POSTERIOR): 2 - PUERTO AUDIO (POSTERIOR): Códec Realtek ALC892 - HDMI: 1 - DIRECTX: 12 - FACTOR DE  FORMA: m-ATX - DVI-D: 1 - SISTEMA OPERATIVO: Compatibilidad con Windows 10 de 64 bits, Compatibilidad con Windows 7 de 64 bits * Para admitir Windows 7 de 64 bits, debe instalar una CPU AMD Pinnacle Ridge y Summit Ridge.",
        precio: 87934.00,
        puntuacion: "****"
    },
]

// Convierte el array de 'productos' a una cadena string JSON 
const productosJSON = JSON.stringify(productos);

// Guarda la cadena JSON en una llave llamada 'productos' en el localStorage
localStorage.setItem('productos', productosJSON);

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
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    // Pasa el codigo para usarse con la funcion showProductDetails cuando se hace click en el signo "+"
    li.innerHTML = `
        <div class="product-description-index">
            <h4>${product.producto}</h4>
            <span class="text-right">${product.descripcion}</span>
        </div>
        <a href="#" onclick="showProductDetails(${product.codigo})"><span class="badge bg-primary rounded-pill">+</span></a>
    `;

    productList.appendChild(li);
});
