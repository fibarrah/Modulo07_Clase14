import { Component, OnInit } from '@angular/core';
import { SoftwareClass } from '../models/software';


@Component({

    selector: 'software',
    templateUrl: './view-inventario-software.component.html'

})

export class miInventarioSoftwareComponent implements OnInit{

    public titulo: String = "Componente de Software";
    public software: Array<SoftwareClass>;
    // PASO 1
    public marcas: String[];


    constructor(){
        // PASO 3
        this.marcas = new Array();

        this.software = [
            new SoftwareClass('Office 2019','Microsoft',1000,true),
            new SoftwareClass('Office Visio 2019','Microsoft',3000,true),
            new SoftwareClass('AutoCAD 2022','AutoDESK',2000,true),
            new SoftwareClass('Control2000 ContaFiscal','Control',3000,true)
        ];
    }

    ngOnInit(){
        //console.log(this.software);
        this.getMarcasSoftware();
    }

    // PASO 2
    getMarcasSoftware(){
        this.software.forEach((values,index) =>{
            // PASO 4 no aceptamos valores repstidos
            if(this.marcas.indexOf(values.marca) < 0){
                this.marcas.push(values.marca);
            }            
        });
        console.log(this.marcas);
    }

    // PASO 5 mostramos la impresion en la vista
}
