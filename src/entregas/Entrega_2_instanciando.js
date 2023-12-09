const path = require("path");
const ProductManager = require("./ProductManager");

// __dirname es la ruta al directorio actual de app.js, que es 'src'
// La ruta resultante será 'src/data/products.json'
const dataPath = path.join(__dirname, "data", "products.json");

// Instanciar la clase ProductManager
const productManager = new ProductManager(dataPath);

// Agregar algunos productos
productManager.addProduct({
  title: "Vianda semanal simple Saludable",
  description: "Vianda de x5 mixtas saludables",
  price: 7000,
  thumbnail: "ruta/de/imagen-1.jpg",
  code: "P001",
  stock: 17,
});

productManager.addProduct({
  title: "Vianda semanal doble Saludable",
  description: "Vianda de x10 mixtas saludables",
  price: 13000,
  thumbnail: "ruta/de/imagen-2.jpg",
  code: "P002",
  stock: 9,
});

productManager.addProduct({
  title: "Vianda semanal simple estandar",
  description: "Vianda de x5 mixtas estandar",
  price: 6500,
  thumbnail: "ruta/de/imagen-3.jpg",
  code: "P003",
  stock: 17,
});

productManager.addProduct({
  title: "Vianda semanal doble estandar",
  description: "Vianda de x10 mixtas estandar",
  price: 12000,
  thumbnail: "ruta/de/imagen-3.jpg",
  code: "P004",
  stock: 23,
});

productManager.addProduct({
    title: "Vianda semanal doble estandar",
    description: "Vianda de x10 mixtas estandar",
    price: 12000,
    thumbnail: "ruta/de/imagen-3.jpg",
    code: "P004",
    stock: 23,
  });

// Buscar un producto por ID
const foundProduct = productManager.getProductById(2);
console.log("Producto encontrado:", foundProduct);

// Actualizar un producto por ID
const updatedProductData = {
  title: "Licuadora Actualizada",
  description: "Licuadora de última generación con múltiples funciones.",
  price: 79.99,
  thumbnail: "ruta/nueva/imagen-de-la-licuadora.jpg",
  code: "LIC002",
  stock: 10,
};

try {
  productManager.updateProduct(2, updatedProductData);
  console.log("Producto actualizado con éxito");
} catch (error) {
  console.error("Error actualizando producto:", error.message);
}

// Eliminar un producto por ID
try {
  productManager.deleteProduct(3);
  console.log("Producto eliminado con éxito");
} catch (error) {
  console.error("Error eliminando producto:", error.message);
}

// Mostrar todos los productos después de la actualización y eliminación
console.log("Productos restantes:", productManager.getProducts());

// Buscar un producto por su ID
const product = productManager.getProductById(2);
if (product) {
  console.log("Producto encontrado:", product);
} else {
  console.log("Producto no encontrado.");
}
