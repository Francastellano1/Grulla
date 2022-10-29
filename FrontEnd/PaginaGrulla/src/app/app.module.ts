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
    Resta1Component
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
