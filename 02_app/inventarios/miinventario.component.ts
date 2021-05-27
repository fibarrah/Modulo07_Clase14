import { Component } from '@angular/core';

/**
 * 
 *  PASO 1 - Vamos a crear una View
 *           Todo lo que hay en template lo pasamos al archivo view-inventario.component.html
 * 
 *  PASO 2 - Hacemos referencia a nuestra view externa
 * 
 */

@Component({

    selector: 'mi-inventario',
    templateUrl: './view-inventario.component.html'

})

/**
 * PASO 3
 * 
 *  Vamos a interactuar con propiedades
 * 
 *  creamos dos propiedades
 *  titulo y listado-titulo
 *   
 * PASO 4 Una vez creadas nuestras variables y hacemos
 *        una interpolacion o binding en el archivo de la vista view-inventario.component.html
 *        
 * 
 */

export class miInventarioComponent {

    // Paso 3 Continuacion
    public titulo: String;
    public listado_titulo: String;

    constructor(){

        this.titulo = "Inventario de PCs";
        this.listado_titulo = "Tipo Producto";

        console.log("Se ha cargado el componente");
    }

}