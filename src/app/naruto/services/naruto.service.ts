import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/naruto.interface";

@Injectable()
export class NarutoService {

    constructor() {}

    private _narutoNinjas: Personaje[] = [
        {
            nombre: "Naruto",
            poder: 99
        },
        {
            nombre: "Sasuke",
            poder: 98
        }
    ];

    get narutoNinjas(): Personaje[] {
        return [...this._narutoNinjas];
    }

    agregarPersonajes(personaje: Personaje) {
        this._narutoNinjas.push(personaje);
    }
}
