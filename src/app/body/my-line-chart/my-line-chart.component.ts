import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ListadosucursalesComponent } from '../listadosucursales/listadosucursales.component';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {
  // tslint:disable-next-line: new-parens
  sucursales = new ListadosucursalesComponent;
  public lineChartData: ChartDataSets[] = [
    { data: this.sucursales.Sucursal1.ventas, label: 'Sucursal 1' },
    { data: this.sucursales.Sucursal2.ventas, label: 'Sucursal 2' },
    { data: this.sucursales.Sucursal3.ventas, label: 'Sucursal 3' },
    { data: this.sucursales.Sucursal4.ventas, label: 'Sucursal 4' }
  ];
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
