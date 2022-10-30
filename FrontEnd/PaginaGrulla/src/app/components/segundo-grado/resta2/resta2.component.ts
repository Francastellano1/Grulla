import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from '../../../cargar-scripts.service';

@Component({
  selector: 'app-resta2',
  templateUrl: './resta2.component.html',
  styleUrls: ['./resta2.component.css']
})
export class Resta2Component implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["resta2"]);
   }
  ngOnInit(): void {
  }

}
