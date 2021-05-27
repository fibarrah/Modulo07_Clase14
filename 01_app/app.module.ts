import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { miInventarioComponent } from './inventarios/miinventario.component';

/**
 * Explicamos que debemos importar todos los componentes
 * para su vista e interaccion
 * 
 * Posteriormente vemos que NgModule es una Decorador o
 * Pattern Design que esta compuesto por:
 * 
 * 1: declarations: nos sirve para cargar nuestros componentes, pipes,
 *                  y nuestras directivas
 * 
 * 2: imports: cargar los modulos que hayamos instalado desde angular
 *             o que hayamos cargado nosotors
 * 
 * 3: provider: que nos ayudan a cargar servicios
 * 
 * 4: bootstrap: Es el modulo principal que se va a cargar
 * 
 */

@NgModule({
  declarations: [
    AppComponent,
    miInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
