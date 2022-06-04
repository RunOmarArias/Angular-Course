import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador2/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {

}
