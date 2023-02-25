import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs';
@Component({
    selector: 'app-selector',
    templateUrl: 'selector.component.html'
})
export class SelectorComponent implements OnInit { 

    formulario: FormGroup = this.fb.group({
        region: ['', [Validators.required]],
        pais: ['', [Validators.required]]
    })

    regiones: string[] = [];
    paises: PaisSmall[] = [];

    constructor(
        private paisService: PaisService,
        private fb: FormBuilder
    ){}

    ngOnInit(): void {
        this.regiones = this.paisService.regiones;
        // this.formulario.get('region')?.valueChanges
        //     .subscribe(region => {
        //         this.paisService.getPaisesPorRegion(region)
        //             .subscribe(paises => this.paises = paises)
        //     })

        this.formulario.get('region')?.valueChanges
            .pipe(
                tap(( _ ) => this.formulario.get('pais')?.reset()),
                switchMap(region => this.paisService.getPaisesPorRegion(region))
            ).subscribe(paises => this.paises = paises)
    }

    guardar(){
        console.log(this.formulario.value);
    }
}
