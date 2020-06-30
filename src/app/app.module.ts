import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { LinegraphComponent } from './body/linegraph/linegraph.component';
import { HomeComponent } from './home/home.component';
// import { ArbolNavidadComponent } from './body/arbol-navidad/arbol-navidad.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListadosucursalesComponent,
    LinegraphComponent,
    HomeComponent,
    // ArbolNavidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
