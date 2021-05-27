import { Component, OnInit } from '@angular/core';
import { SoftwareClass } from '../models/software';


@Component({

    selector: 'software',
    templateUrl: './view-inventario-software.component.html'

})

export class miInventarioSoftwareComponent implements OnInit{

    public titulo: String = "Componente de Software";
    public software: Array<SoftwareClass>;

    constructor(){
        this.software = [
            new SoftwareClass('Office 2019','Microsoft',1000,true),
            new SoftwareClass('AutoCAD 2022','AutoDESK',2000,true),
            new SoftwareClass('Control2000 ContaFiscal','Control',3000,true)
        ];
    }

    ngOnInit(){
        console.log(this.software);
    }
}
