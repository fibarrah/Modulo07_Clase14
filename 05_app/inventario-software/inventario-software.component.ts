import { Component } from '@angular/core';

/**
 * 
 * PASO 1 - Creamos el import
 * 
 * Paso 2 - Definimos el patron de diseño
 * 
 * PASO 3 - Desde app.moduloe.ts hay que importar el componente
 * 
 * PASO 4 - Agregamos la etiqueta en app.component.html
 * 
 */

@Component({

    selector: 'software',
    templateUrl: './view-inventario-software.component.html'

})

export class miInventarioSoftwareComponent {

    public titulo: String = "Componente de Software";

}
