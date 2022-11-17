import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from '../../../cargar-scripts.service';

@Component({
  selector: 'app-suma1',
  templateUrl: './suma1.component.html',
  styleUrls: ['./suma1.component.css']
})
export class Suma1Component implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["suma1"]);
   }
  ngOnInit(): void {
  }

}
