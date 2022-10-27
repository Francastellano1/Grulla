import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Inicio Service

import {CargarScriptsService} from './cargar-scripts.service';
//Fin Service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaComponent } from './components/resta/resta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaComponent
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
