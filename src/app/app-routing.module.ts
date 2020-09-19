import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { SucursalesComponent } from './abm/sucursales/sucursales.component';
import { MyLineChartComponent } from './graficos/my-line-chart/my-line-chart.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'lista-sucursales'},
  { path: 'lista-sucursales', component: ListadosucursalesComponent},
  { path: 'grafico-ventas', component: MyLineChartComponent},
  { path: 'abm-sucursales', component: SucursalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
