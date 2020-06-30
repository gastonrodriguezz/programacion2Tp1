import { Mes } from './mes';
import { ViewChild } from '@angular/core';
import { LinegraphComponent } from '../body/linegraph/linegraph.component';

export class Sucursal {
    /* Modelo TypeScript */
    constructor(
        private _nombre: string,
        private _direccion: string,
        private _ciudad: string,
        private _ventas: Array<any>
    ) { }

    get nombre(): string { // get por defecto
        return this._nombre;
    }

    set nombre(name: string) { // set por defecto
        this._nombre = name;
    }

    get direccion(): string { // get por defecto
        return this._direccion;
    }

    set direccion(direccion: string) { // set por defecto
        this._direccion = direccion;
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
