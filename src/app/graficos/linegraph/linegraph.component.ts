import { Component, OnInit, Input } from '@angular/core';
import { SucursalesService } from '../../servicios/sucursales.service';

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css']
})
export class LinegraphComponent implements OnInit {
   // tslint:disable-next-line: new-parens
   sucursales = new SucursalesService;
  constructor() {
   }
  ngOnInit(): void {
  }


}

