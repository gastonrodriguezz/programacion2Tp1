import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../classes/sucursal';
import { Mes } from '../../classes/mes';
import { newArray } from '@angular/compiler/src/util';
import { SucursalesService } from 'src/app/servicios/sucursales.service';
@Component({
  selector: 'app-listadosucursales',
  templateUrl: './listadosucursales.component.html',
  styleUrls: ['./listadosucursales.component.css']
})
export class ListadosucursalesComponent implements OnInit {

  constructor(public sucursalesServicio: SucursalesService) {
   
  }
  ngOnInit(): void {
   
  }
    
}
