import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/classes/sucursal';
import { SucursalesService } from 'src/app/servicios/sucursales.service';
@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {
  public sucursalnueva: Sucursal;
  public sucursaledit: Sucursal;
  public sucursalId: number;
  constructor(public sucursalesServicio: SucursalesService) {
    this.sucursalnueva = new Sucursal("","","",[]);
   }

  ngOnInit(): void {
  }
  onSubmit() {
    this.sucursalesServicio.addSucursal(this.sucursalnueva);
    console.log(this.sucursalnueva);
    this.sucursalnueva = new Sucursal("","","",[]);
  }
  editarSucursal(i:number){
    this.sucursaledit = this.sucursalesServicio.listadoSucursales[i];
    this.sucursalId = i;
  }
  modificar(){
    if(this.sucursalId>-1){
      this.sucursalesServicio.editar(this.sucursalId,this.sucursaledit);
    }
    this.sucursaledit = new Sucursal("","","",[]);
    this.sucursalId = -1;
  }
}
