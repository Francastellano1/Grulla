import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from '../../../cargar-scripts.service';

@Component({
  selector: 'app-numero1',
  templateUrl: './numero1.component.html',
  styleUrls: ['./numero1.component.css']
})
export class Numero1Component implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["numeros"]);
   }
  ngOnInit(): void {
  }

}
