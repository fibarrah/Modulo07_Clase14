import { Component } from '@angular/core';

@Component({

  // PASO 1

  /* SELECTOR 
      Esta opcion es para poder cargar el elemento en alguna etiqueta en el condigo HTML
      este se encuentra en el archivo index.html que esta en la raiz principal del programa
  */
  selector: 'app-root',
  /* templateURL 
      ES el VIEW o Vista qu contendra todos los elementos de la SPA, este codigo esta
      referenciado en app/app.component.html
  */
  templateUrl: './app.component.html',
  /* styleUrls 
      Esto es para poder referenciar CSS de manera mas especifica a un control
  */
  styleUrls: ['./app.component.css']
})

/* Cambiamos el texto para poder hacer la prueba y la etiqueta esta en app-component.html*/
export class AppComponent {
    public title = 'Master JavaScript';
}

// PASO 2

/* Borrar todo el contenido HTML 

  Ponemos una propiedad <p>Aprendamos juntos angular</p>
*/

// PASO 3

/**
 * Para que todo pueda cargar y funcionar es necesarios integrar todo en
 * app.module.ts en donde encuentran los modulos para poder crear la interaccion
 * muy parecido a MVC (Modules Views Components)
 * 
 * Tenemos que ir al archivo app.module.ts
 * 
 */

// PASO 4

/**
 *  CREAR UN COMPONENTE
 * 
 * Podemos crear componentes directamente desde la carpeta app, pero en realidad 
 * vamos a crear carpetas donde se alojaran todos nuestros componetes
 * para hacer elementos mas vistosos y elegantes y en orden
 * 
 *  PASO 5 Creamos la carpeta inventarios y dentro de la carpeta el componente
 *         miinventario.component.ts
 * 
 *  PASO 6 Creamos una vista en esa misma carpeta view-inventario.component.html
 * 
 */



