import { Mes } from './mes';
import { ViewChild } from '@angular/core';
import { LinegraphComponent } from '../body/linegraph/linegraph.component';

export class Sucursal {
    /* Modelo TypeScript */
    constructor(
        public _nombre: string,
        public _telefono: string,
        public _ciudad: string,
        public _ventaspormes: Array<any>
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
    setVentasMes(ventas: number, mes: number) {
        if(mes > 0 && ventas >= 0) {
            this._ventaspormes[mes] = ventas;
        }
    }

    getVentasMes(mes) {
        return this._ventaspormes[mes];
    }

    get ventas() {
        return this._ventaspormes;
    }
}
