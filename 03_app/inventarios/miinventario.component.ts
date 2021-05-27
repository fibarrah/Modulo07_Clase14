import { Component } from '@angular/core';

@Component({

    selector: 'mi-inventario',
    templateUrl: './view-inventario.component.html'

})

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