import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    public title = 'Master JavaScript';

    // PASO 5 Continuacion
    public mostrar_inventario: boolean = true;

    ocultarMiInventario(){
      this.mostrar_inventario = false;
    }

    // PASO 6 Continuacion
    mostrarMiInventario(){
      this.mostrar_inventario = true;
    }


}




