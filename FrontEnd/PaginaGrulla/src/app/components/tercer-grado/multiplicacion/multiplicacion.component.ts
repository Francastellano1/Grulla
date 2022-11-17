import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';


@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {

  constructor( private _CargaScripts:CargarScriptsService ) {
    _CargaScripts.Carga(["multiplicacion"]);
   }
  ngOnInit(): void {
  }

}
