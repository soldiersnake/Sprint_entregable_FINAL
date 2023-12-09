const fs = require("fs");
const path = require("path"); // Agrega esta línea para importar el módulo path

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.init();
  }

  init() {
    const dir = path.dirname(this.filePath); //para utilizar path

    //aca creamos la carpeta data sin no existe
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    // Si el archivo no existe, lo creamos con un array vacío
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  readFromFile() {
    const data = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(data);
  }

  writeToFile(data) {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  addProduct(product) {
    try {
      const { title, description, price, thumbnail, code, stock } = product;
      // Validar que todos los campos estén presentes
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error("Todos los campos son requeridos");
      }

      const products = this.readFromFile(); //leo para encontrar el producto repetido o no

      // Validar que el código no se repita
      if (products.some((existingProduct) => existingProduct.code === code)) {
        throw new Error("El codigo de producto debe de ser unico");
        // console.log('Producto repetido');
      }

      const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
      const newProduct = { ...product, id: newId };
      products.push(newProduct);
      this.writeToFile(products);
    } catch (error) {
      console.log("Error al crear producto:", error);
    }
  }

  getProducts() {
    return this.readFromFile();
  }

  //busqueda por id
  getProductById(id) {
    const products = this.readFromFile();
    return products.find((p) => p.id === id);
  }

  updateProduct(id, updatedProduct) {
    const products = this.readFromFile();
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex === -1) throw new Error("Product not found");

    // Asegurarse de no sobrescribir el id
    updatedProduct.id = id;
    products[productIndex] = updatedProduct;
    this.writeToFile(products);
  }

  //elimino por id producto
  deleteProduct(id) {
    let products = this.readFromFile();
    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex === -1) throw new Error("Product not found");

    products = products.filter((p) => p.id !== id);
    this.writeToFile(products);
  }
}

module.exports = ProductManager;
