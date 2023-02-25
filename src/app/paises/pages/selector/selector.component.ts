import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais, PaisSmall } from '../../interfaces/paises.interface';
import { delay, switchMap, tap } from 'rxjs';
@Component({
    selector: 'app-selector',
    templateUrl: 'selector.component.html'
})
export class SelectorComponent implements OnInit {

    cargando: boolean = false;

    formulario: FormGroup = this.fb.group({
        region: ['', [Validators.required]],
        pais: ['', [Validators.required]],
        fronteras: ['', [Validators.required]],
    })

    regiones    : string[] = [];
    paises      : PaisSmall[] = [];
    fronteras   : PaisSmall[] | any = [];

    constructor(
        private paisService: PaisService,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        this.regiones = this.paisService.regiones;
        // this.formulario.get('region')?.valueChanges
        //     .subscribe(region => {
        //         this.paisService.getPaisesPorRegion(region)
        //             .subscribe(paises => this.paises = paises)
        //     })

        this.formulario.get('region')?.valueChanges
            .pipe(
                tap((_) => {
                    this.formulario.get('pais')?.reset()
                    this.cargando = true;
                }),
                switchMap(region => this.paisService.getPaisesPorRegion(region))
            ).subscribe(paises => {
                this.paises = paises || [];
                this.cargando = false;
            });
        
        this.formulario.get('pais')?.valueChanges
            .pipe(
                tap( (_) => {
                    this.formulario.get('fronteras')?.reset();
                    this.cargando = true;
                }),
                switchMap(codigo => this.paisService.getPaisPorCodigo(codigo)),
                switchMap(pais => this.paisService.getPaisesPorCodigos(pais?.borders!))
            ).subscribe(paises => {
                this.fronteras = paises || [];
                this.cargando = false;
            })
    }

    guardar() {
        console.log(this.formulario.value);
    }
}
