import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán Ámerica"];
  heroeBorrado: string = "";
  hasHeroe: boolean = true;

  constructor() {
    console.log("constructor");
  }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";
    this.checkLength();
  }

  checkLength() {
    if(this.heroes.length <= 0) {
      this.hasHeroe = false;
    }
  }
}
