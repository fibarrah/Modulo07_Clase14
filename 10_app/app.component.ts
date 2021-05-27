import { Component } from '@angular/core';
import { configuracion } from  './models/config-inventario'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    public title = 'Master JavaScript';
    public descripcion: String;
    public mostrar_inventario: boolean = true;

    constructor() {
      this.title = configuracion.titulo;
      this.descripcion = configuracion.descripcion;
    }

    ocultarMiInventario(){
      this.mostrar_inventario = false;
    }

    mostrarMiInventario(){
      this.mostrar_inventario = true;
    }


}



