import { Component } from '@angular/core';
import { Personaje } from '../interfaces/naruto.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    constructor() {}

    nuevo: Personaje = {
        nombre: "Kakashi",
        poder: 88
    }
}
