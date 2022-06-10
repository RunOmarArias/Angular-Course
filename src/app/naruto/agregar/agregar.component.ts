import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

    constructor(private narutoService: NarutoService) {}

    @Input() nuevo: Personaje = {
        nombre: "",
        poder: 0
    }

    //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    agregar() {
        if (this.nuevo.nombre.trim().length === 0) {
            return;
        }
        //this.onNuevoPersonaje.emit(this.nuevo);
        this.narutoService.agregarPersonajes(this.nuevo);
        this.nuevo = {
            nombre: "",
            poder: 0
        }
    }
}
