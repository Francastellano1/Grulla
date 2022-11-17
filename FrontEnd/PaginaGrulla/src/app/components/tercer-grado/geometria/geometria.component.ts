import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.component.html',
  styleUrls: ['./geometria.component.css']
})
export class GeometriaComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["geometria"]);
   }
  ngOnInit(): void {
  }

}
