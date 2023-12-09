class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct({ title, description, price, thumbnail, code, stock }) {
      try {
        // Validar que todos los campos estén presentes
        if (!title || !description || !price || !thumbnail || !code || !stock) {
          throw new Error("Todos los campos son requeridos");
        }
  
        // Validar que el código no se repita
        if (this.products.some((product) => product.code === code)) {
          throw new Error("El codigo de producto debe de ser unico");
        }
  
        const newProduct = {
          id: this.nextId++,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
  
        this.products.push(newProduct);
        // Imprimir en consola el producto recién creado
        console.log("Producto agregado:", newProduct);
      } catch (error) {
        console.log("Error:", error);
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        console.error("Not found");
        return;
      }
      return product;
    }
  }
  
  module.exports = ProductManager;  