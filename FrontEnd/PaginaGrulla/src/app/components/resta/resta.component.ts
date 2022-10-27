import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from '../../cargar-scripts.service';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["resta"]);
   }

  ngOnInit(): void {
  }

}
