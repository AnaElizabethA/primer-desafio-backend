class ProductManager {
    constructor() {
      this.products = [];
    }
  
   // agregar productos al array
    addProduct(title, description, price, thumbnail, code, stock) {

      if (this.products.some((product) => product.code === code)) {
        console.error("El código del producto esta cargado");
        return;
      } else {
        this.products.push({
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
          id: this.products.length,
        });
      }
    }

// metodo que retorna los productos
   getProducts() {
      console.log(this.products);
    }
  
// metodo para verificar que no se repite el id  
      getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        console.log(product);
      } else {
        console.error("No se encuentra el producto");
        return;
      }
    }
  }
  
  const gerente = new ProductManager()
  
  gerente.getProducts()
  gerente.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", 25)
  gerente.getProducts()
  gerente.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", 25)
  gerente.getProducts()
  gerente.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", 25)
  
  gerente.getProductById(1)