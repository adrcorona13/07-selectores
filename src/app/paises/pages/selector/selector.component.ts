import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
@Component({
    selector: 'app-selector',
    templateUrl: 'selector.component.html'
})
export class SelectorComponent { 

    constructor(private paisService: PaisService){}
}
