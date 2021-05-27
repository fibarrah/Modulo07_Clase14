import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

/**
 * PASO 1 - OnInit la importamos
 *          import { Component, OnInit } from '@angular/core';
 *          Para posteriormente ponemos el implements OnInit
 *          Para posteriormenet creamos el metodo
 * 
 * PAOS 2 - 
 *          Este se ejecuta cada vez que hay un cambio en el componente o el la app
 * 
 *          DoCheck lo importamos
 *          import { Component, OnInit, DoCheck} from '@angular/core';
 *          Para posteriormente ponemos el DoCheck
 *          Para posteriormenet creamos el metodo ngDoCheck()
 * 
 * PASO 3 - Vamos a crear un metodo para poder cambiar el titulo
 *          
 *          EL boton los ponemos en la vista view-inventario.component.html
 * 
 * PASO 4 - OnDestroy
 *          
 *          Sirve para poder ejecutar algo antes de eliminar una instancia
 *          de un componente
 * 
 *          OnDestroy lo importamos import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
 *          Lo agregamos en el implement
 *          Creamos su metodo
 * 
 * PASO 5 - Para ver como funciona
 * 
 *          creamos un ngIf en la etiqueta de   <mi-inventario *ngIf=""></mi-inventario>
 * 
 *          en app.component.ts agregar los elementos de interaccion
 * 
 *          Crea un boton para ocultar en app.component.html
 * 
 * PASO 6 - Solo para mostrar el componente
 * 
 *          Crea un boton para ocultar en app.component.html
 * 
 *          
 * 
 */

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
        console.log("Ejecutamos el metodo OnInit");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestro Ejecutando");
    }

    // PASO 3 - Continuacion
    cambiarTitulo(){
        this.titulo = "Cambiamos el Titulo del Inventario";
    }

}