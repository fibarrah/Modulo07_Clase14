
import { Component } from '@angular/core';

/**
 * PASO 1: Importar el componente
 * 
 * PASO 2: 
 *          - Creamos un patron de diseños
 * 
 * PASO 3: Creamos la clase miInventarioComponent
 * 
 * PASO 4: debemos cargar el componente en app.module.ts
 */


@Component({

    selector: 'mi-inventario',
    template: `
            <h2>Componente Inventario PCs</h2>
            <ul>
                <li>Equipo Ensamblado</li>
                <li>Equipo de Marca</li>
                <li>AIO</li>
            </ul>

    `

})

// Este es el nombre que ponemos en app.module.ts,
// Posteriuormente en NgModule en declarations
// el nombre de nuestra clase

// Para posteriormente lo mandamos llamar en app.component.html
// en una etiqueta con el nombre que se pasa en selector

export class miInventarioComponent {

    constructor(){
        console.log("Se ha cargado el componente");
    }

}