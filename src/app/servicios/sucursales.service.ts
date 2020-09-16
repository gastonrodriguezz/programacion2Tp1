import { Injectable } from '@angular/core';
import { Sucursal } from '../classes/sucursal';
@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  public listadoSucursales: Array<Sucursal>;
  public Sucursal1: Sucursal;
  public Sucursal2: Sucursal;
  public Sucursal3: Sucursal;
  public Sucursal4: Sucursal;
  constructor() {
    this.Sucursal1 = new Sucursal('Casa Matriz', "154407862", 'Santa Fe', this.add12RandomNumber(new Array()));
    this.Sucursal2 = new Sucursal('Sucursal Norte', "155329364", 'Reconquista', this.add12RandomNumber(new Array()));
    this.Sucursal3 = new Sucursal('Sucursal Sur', "156378374", 'Rosario', this.add12RandomNumber(new Array()));
    this.Sucursal4 = new Sucursal('Sucursal Oeste', "155399171", 'Rafaela', this.add12RandomNumber(new Array()));
    this.listadoSucursales = new Array(this.Sucursal1, this.Sucursal2, this.Sucursal3, this.Sucursal4);
  }
  ngOnInit(): void {
  }
    // retorna un numero aleatorio entre 0-200
    randomNumber() {
      return Math.floor(Math.random() * 201);
      }
    // añade 12 elemtentos random a un array
    add12RandomNumber(a: number[]) {
      for (let i = 0; i < 12; i++) {
        a.push(this.randomNumber());
      }
      return a;
    }
    addSucursal(sucursal:Sucursal) {
      this.listadoSucursales.push(sucursal);
    }
}