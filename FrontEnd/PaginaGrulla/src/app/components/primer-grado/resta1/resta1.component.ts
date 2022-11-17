import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from '../../../cargar-scripts.service';

@Component({
  selector: 'app-resta',
  templateUrl: 'resta1.component.html',
  styleUrls: ['./resta1.component.css']
})
export class Resta1Component implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["resta"]);
   }

  ngOnInit(): void {
  }

}

