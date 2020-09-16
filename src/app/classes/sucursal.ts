import { Mes } from './mes';
import { ViewChild } from '@angular/core';
import { LinegraphComponent } from '../body/linegraph/linegraph.component';

export class Sucursal {
    /* Modelo TypeScript */
    constructor(
        private _nombre: string,
        private _telefono: string,
        private _ciudad: string,
        private _ventas: Array<any>
    ) { }

    get nombre(): string { // get por defecto
        return this._nombre;
    }

    set nombre(name: string) { // set por defecto
        this._nombre = name;
    }

    get telefono(): string { // get por defecto
        return this._telefono;
    }

    set telefono(telefono: string) { // set por defecto
        this._telefono = telefono;
    }
    get ciudad(): string { // get por defecto
        return this._ciudad;
    }

    set ciudad(ciudad: string) { // set por defecto
        this._ciudad = ciudad;
    }
    set ventas(valor: any[]){
      this._ventas = valor;
    }
    get ventas() {
      return this._ventas;
  }
}
