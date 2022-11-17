import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElegirGradoComponent } from './components/paginaprincipal/elegir-grado.component';
import { PrimerGradoComponent } from './components/primer-grado/primer-grado.component';
import { HomeComponent } from './components/home/home.component';
import { SegundoGradoComponent } from './components/segundo-grado/segundo-grado.component';
import { TercerGradoComponent } from './components/tercer-grado/tercer-grado.component';
import { Resta1Component } from './components/primer-grado/resta1/resta1.component';
import { Suma1Component } from './components/primer-grado/suma1/suma1.component';
import { Numero1Component } from './components/primer-grado/numero1/numero1.component';
import { Resta2Component } from './components/segundo-grado/resta2/resta2.component';
import { Suma2Component } from './components/segundo-grado/suma2/suma2.component';
import { Numero2Component } from './components/segundo-grado/numero2/numero2.component'
import { MultiplicacionComponent} from './components/tercer-grado/multiplicacion/multiplicacion.component';
import { GeometriaComponent } from './components/tercer-grado/geometria/geometria.component';
import { DivisionComponent } from './components/tercer-grado/division/division.component';
import { ProblemasComponent } from './components/tercer-grado/problemas/problemas.component';

const routes: Routes = [
  {path:'elegirgrado', component: ElegirGradoComponent},
  {path:'primer-grado', component: PrimerGradoComponent},
  {path:'',component: HomeComponent},
  {path:'segundo-grado', component: SegundoGradoComponent},
  {path:'tercer-grado', component: TercerGradoComponent},
  {path:'primer-grado/resta1', component: Resta1Component},
  {path:'primer-grado/suma1', component: Suma1Component},
  {path:'primer-grado/numero1', component: Numero1Component},
  {path:'segundo-grado/resta2', component: Resta2Component},
  {path:'segundo-grado/suma2', component: Suma2Component},
  {path:'segundo-grado/numero2', component: Numero2Component},
  {path:'tercer-grado/multiplicacion', component:MultiplicacionComponent},
  {path:'tercer-grado/division', component:DivisionComponent},
  {path:'tercer-grado/geometria', component:GeometriaComponent},
  {path:'tercer-grado/problemas',component:ProblemasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
