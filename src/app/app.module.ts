import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { SucursalesComponent } from './abm/sucursales/sucursales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyLineChartComponent } from './graficos/my-line-chart/my-line-chart.component';
import { LinegraphComponent } from './graficos/linegraph/linegraph.component';
import {MatTableModule} from '@angular/material/table';
import { TablaComponent } from './tabla/tabla.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListadosucursalesComponent,
    LinegraphComponent,
    HomeComponent,
    MyLineChartComponent,
    SucursalesComponent,
    TablaComponent,
   // MatTableModule,
    
    // ArbolNavidadComponent,
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
