import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { ChartsModule } from 'ng2-charts';
import { SucursalesComponent } from './abm/sucursales/sucursales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLineChartComponent } from './graficos/my-line-chart/my-line-chart.component';
import { LinegraphComponent } from './graficos/linegraph/linegraph.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListadosucursalesComponent,
    LinegraphComponent,
    MyLineChartComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
