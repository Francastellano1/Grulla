import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Inicio Service

import {CargarScriptsService} from './cargar-scripts.service';
//Fin Service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaComponent } from './components/resta/resta.component';
import { PaginaprincipalComponent } from './components/paginaprincipal/paginaprincipal.component';
import { ElegirGradoComponent } from './components/paginaprincipal/elegir-grado.component';
import { PrimerGradoComponent } from './components/primer-grado/primer-grado.component';
import { HomeComponent } from './components/home/home.component';
import { SegundoGradoComponent } from './components/segundo-grado/segundo-grado.component';
import { TercerGradoComponent } from './components/tercer-grado/tercer-grado.component';
import { Resta1Component } from './components/primer-grado/resta1/resta1.component';
import { Suma1Component } from './components/primer-grado/suma1/suma1.component';
import { Numero1Component } from './components/primer-grado/numero1/numero1.component';
import { Suma2Component } from './components/segundo-grado/suma2/suma2.component';
import { Resta2Component } from './components/segundo-grado/resta2/resta2.component';
import { Numero2Component } from './components/segundo-grado/numero2/numero2.component';
import { MultiplicacionComponent } from './components/tercer-grado/multiplicacion/multiplicacion.component';
import { DivisionComponent } from './components/tercer-grado/division/division.component';
import { GeometriaComponent } from './components/tercer-grado/geometria/geometria.component';
import { ProblemasComponent } from './components/tercer-grado/problemas/problemas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaComponent,
    PaginaprincipalComponent,
    ElegirGradoComponent,
    PrimerGradoComponent,
    HomeComponent,
    SegundoGradoComponent,
    TercerGradoComponent,
    Resta1Component,
    Suma1Component,
    Numero1Component,
    Suma2Component,
    Resta2Component,
    Numero2Component,
    MultiplicacionComponent,
    DivisionComponent,
    GeometriaComponent,
    ProblemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
