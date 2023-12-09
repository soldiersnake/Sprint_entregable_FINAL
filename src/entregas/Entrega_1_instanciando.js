const ProductManager = require("./Entrega_1");

// Instanciar la clase ProductManager
const productManager = new ProductManager();

// Agregar algunos productos
productManager.addProduct({
  title: 'Vianda semanal simple Saludable',
  description: 'Vianda de x5 mixtas saludables',
  price: 7000,
  thumbnail: 'ruta/de/imagen-1.jpg',
  code: 'P001',
  stock: 17
});

productManager.addProduct({
  title: 'Vianda semanal doble Saludable',
  description: 'Vianda de x10 mixtas saludables',
  price: 13000,
  thumbnail: 'ruta/de/imagen-2.jpg',
  code: 'P002',
  stock: 9
});

productManager.addProduct({
  title: 'Vianda semanal simple estandar',
  description: 'Vianda de x5 mixtas estandar',
  price: 6500,
  thumbnail: 'ruta/de/imagen-3.jpg',
  code: 'P003',
  stock: 17
});

productManager.addProduct({
    title: 'Vianda semanal doble estandar',
    description: 'Vianda de x10 mixtas estandar',
    price: 12000,
    thumbnail: 'ruta/de/imagen-3.jpg',
    code: 'P004',
    stock: 23
  });



// Buscar un producto por su ID
const product = productManager.getProductById(2);
if (product) {
  console.log('Producto encontrado:', product);
} else {
  console.log('Producto no encontrado.');
}
