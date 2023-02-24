import { NgModule } from '@angular/core';
import { SelectorComponent } from './pages/selector/selector.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        SelectorComponent
    ],
    imports: [
        PaisesRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class PaisesModule { }