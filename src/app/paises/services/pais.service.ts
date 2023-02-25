import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais, PaisSmall } from '../interfaces/paises.interface';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PaisService {

    private _baseUrl: string = 'https://restcountries.com/v2';

    private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    get regiones(): string[] {
        return [...this._regiones];
    }

    constructor(private httpClient: HttpClient) { }

    getPaisesPorRegion(region: string): Observable<PaisSmall[] | null> {

        if (!region) {
            return of(null);
        }

        const url: string = `${this._baseUrl}/region/${region}?fields=alpha3Code,name`;
        return this.httpClient.get<PaisSmall[]>(url);
    }
    getPaisPorCodigo(codigo: string): Observable<Pais | null> {

        if (!codigo) {
            return of(null);
        }

        const url: string = `${this._baseUrl}/alpha/${codigo}`;
        return this.httpClient.get<Pais>(url);
    }

    getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall | null> {

        if (!codigo) {
            return of(null);
        }

        const url: string = `${this._baseUrl}/alpha/${codigo}?fields=alpha3Code,name`;
        return this.httpClient.get<PaisSmall>(url);
    }

    getPaisesPorCodigos(borders: string[]): Observable<(PaisSmall | null)[]>{
        if (!borders) {
            return of([])
        }
        const peticiones: Observable<PaisSmall | null>[] = [];

        borders.forEach(codigo => {
            const peticion = this.getPaisPorCodigoSmall(codigo);
            peticiones.push(peticion);
        });

        return combineLatest(peticiones);
    }
}