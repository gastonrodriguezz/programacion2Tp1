import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { LinegraphComponent } from './body/linegraph/linegraph.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'lista-sucursales'},
  { path: 'lista-sucursales', component: ListadosucursalesComponent},
  { path: 'grafico-ventas', component: LinegraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
