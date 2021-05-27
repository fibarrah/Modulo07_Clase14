import { Component } from '@angular/core';
import { configuracion } from  './models/config-inventario'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    public title = 'Master JavaScript';
    // PASO 5 Creamos el elemeno de descripcion
    public descripcion: String;
    public mostrar_inventario: boolean = true;

    // PASO 4 - Creamos un constructor
    constructor() {
      this.title = configuracion.titulo;
      // PASO 5 Continuacion
      this.descripcion = configuracion.descripcion;
      // PASO 7 lo agregamos a la vista app.component.html
    }

    ocultarMiInventario(){
      this.mostrar_inventario = false;
    }

    // PASO 6 Continuacion
    mostrarMiInventario(){
      this.mostrar_inventario = true;
    }


}



