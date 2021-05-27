import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { miInventarioComponent } from './inventarios/miinventario.component';
import { miInventarioSoftwareComponent } from './inventario-software/inventario-software.component'

@NgModule({
  declarations: [
    AppComponent,
    miInventarioComponent,
    miInventarioSoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
