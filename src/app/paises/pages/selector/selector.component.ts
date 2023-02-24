import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-selector',
    templateUrl: 'selector.component.html'
})
export class SelectorComponent { 

    formulario: FormGroup = this.fb.group({
        region: ['', [Validators.required]]
    })

    constructor(
        private paisService: PaisService,
        private fb: FormBuilder
    ){}

    guardar(){
        console.log(this.formulario.value);
        
    }
}
