import { Component, OnInit, Input } from '@angular/core';
import { ListadosucursalesComponent } from '../listadosucursales/listadosucursales.component';
import { Sucursal } from '../../classes/sucursal';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css']
})
export class LinegraphComponent implements OnInit {
   // tslint:disable-next-line: new-parens
   sucursales = new ListadosucursalesComponent;
   papa;
  constructor() {
   }
  ngOnInit(): void {
  }


}

