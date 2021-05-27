import { Component, OnInit } from '@angular/core';
// PASO 3 - Continuacion
import { SoftwareClass } from '../models/software';


@Component({

    selector: 'software',
    templateUrl: './view-inventario-software.component.html'

})

export class miInventarioSoftwareComponent implements OnInit{

    public titulo: String = "Componente de Software";
    // PASO 4 Creamos un array y un constructor
    public software: Array<SoftwareClass>;

    constructor(){
        this.software = [
            new SoftwareClass('Office 2019','Microsoft',1000,true),
            new SoftwareClass('AutoCAD 2022','AutoDESK',2000,true),
            new SoftwareClass('Control2000 ContaFiscal','Control',3000,true)
        ];
    }

    // PASO 5 - Agregamos el elemento OnInit
    ngOnInit(){
        console.log(this.software);
    }

    // PASO 6 - Ya que tenemos los datos tenemos que ir a la vista e imprimirlo
    //          view-inventario-software.component.html

}
