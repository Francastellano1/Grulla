import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from '../../../cargar-scripts.service';


@Component({
  selector: 'app-numero2',
  templateUrl: './numero2.component.html',
  styleUrls: ['./numero2.component.css']
})
export class Numero2Component implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["numeros2"]);
   }
  ngOnInit(): void {
  }

}
