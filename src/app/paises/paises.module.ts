import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SelectorComponent } from './pages/selector/selector.component';
import { PaisesRoutingModule } from './paises-routing.module';

@NgModule({
    declarations: [
        SelectorComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        PaisesRoutingModule,
    ],
    exports: [
        RouterModule
    ]
})
export class PaisesModule { }