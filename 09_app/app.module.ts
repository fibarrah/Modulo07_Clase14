import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { miInventarioComponent } from './inventarios/miinventario.component';
import { miInventarioSoftwareComponent } from './inventario-software/inventario-software.component';
import { InventarioHardwareComponent } from './inventario-hardware/inventario-hardware.component'

@NgModule({
  declarations: [
    AppComponent,
    miInventarioComponent,
    miInventarioSoftwareComponent,
    InventarioHardwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
