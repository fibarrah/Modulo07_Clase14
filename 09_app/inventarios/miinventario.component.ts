import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({

    selector: 'mi-inventario',
    templateUrl: './view-inventario.component.html'

})

// PASO 1 -  Continuacion

export class miInventarioComponent implements OnInit, DoCheck, OnDestroy{

    // Paso 3 Continuacion
    public titulo: String;
    public listado_titulo: String;

    constructor(){

        this.titulo = "Inventario de PCs";
        this.listado_titulo = "Tipo Producto";

        console.log("Se ha cargado el componente");
    }

    ngOnInit(){
        //console.log("Ejecutamos el metodo OnInit");
    }

    ngDoCheck(){
        //console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        //console.log("OnDestro Ejecutando");
    }

    // PASO 3 - Continuacion
    cambiarTitulo(){
        this.titulo = "Cambiamos el Titulo del Inventario";
    }

}