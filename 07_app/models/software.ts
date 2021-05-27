
// PASO 1 creamos la clase

export class SoftwareClass {

    /*
    public nombre: String;
    public marca: String;
    public precio: number;
    public stock: boolean;

    constructor(nombre,marca,precio,stock){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
    */
    
    // PASO 2 - Una mejor manera

    constructor(
        public nombre: String,
        public marca: String,
        public precio: number,
        public stock: boolean
    ){}

}

// PASO 3 - Importamos el modelo en component.ts de software