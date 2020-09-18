import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { LinegraphComponent } from './body/linegraph/linegraph.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './body/my-line-chart/my-line-chart.component';
import { SucursalesComponent } from './abm/sucursales/sucursales.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    
    // ArbolNavidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
