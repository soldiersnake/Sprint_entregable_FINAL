const express = require("express");
const path = require("path");
const ProductManager = require("./ProductManager");

const app = express();
const port = 3000; // Puedes elegir el puerto que prefieras

// Instanciar la clase ProductManager
const productManager = new ProductManager(
  path.join(__dirname, "data", "products.json")
);

// Endpoint para obtener todos los productos o una cantidad limitada
app.get("/products", (req, res) => {

  // ejemplo de consulta con limit  http://localhost:3000/products?limit=3
  const { limit } = req.query;
  let products = productManager.getProducts();

  if (limit) {
    products = products.slice(0, Number(limit));
  }

  res.json(products);
});

//EJEMPLO DE FETCH DESDE UNA APP DE FRONT CON LIMIT
// fetch('http://localhost:3000/products?limit=5')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Endpoint para obtener un producto específico por su ID
app.get("/products/:pid", (req, res) => {
  const { pid } = req.params;
  const product = productManager.getProductById(Number(pid)); //envio id como numerico

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
