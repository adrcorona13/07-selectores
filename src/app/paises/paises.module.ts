import { NgModule } from '@angular/core';
import { SelectorComponent } from './pages/selector/selector.component';
import { PaisesRoutingModule } from './paises-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
    declarations: [
        SelectorComponent
    ],
    imports: [
        PaisesRoutingModule,
        HttpClientModule
    ],
    exports: [
        RouterModule
    ]
})
export class PaisesModule { }