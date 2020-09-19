import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../classes/sucursal';
import { Mes } from '../../classes/mes';
import { newArray } from '@angular/compiler/src/util';

import { SucursalesService } from 'src/app/servicios/sucursales.service';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-listadosucursales',
  templateUrl: './listadosucursales.component.html',
  styleUrls: ['./listadosucursales.component.css']
})
export class ListadosucursalesComponent implements OnInit {
  dataSource = new MatTableDataSource(this.sucursalesServicio.listadoSucursales);
  displayedColumns = ['nombre', 'telefono', 'ciudad'];
  constructor(public sucursalesServicio: SucursalesService) {
  }
  ngOnInit(): void {
    console.log(this.dataSource);

  }
}
