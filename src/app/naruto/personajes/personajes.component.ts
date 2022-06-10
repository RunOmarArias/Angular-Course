import { Component, Input } from '@angular/core';
import { NarutoService } from '../services/naruto.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

    //@Input() narutoNinjas: Personaje[] = [];
    get narutoNinjas() {
        return this.narutoService.narutoNinjas;
    }

    constructor(private narutoService: NarutoService) {

    }
}
