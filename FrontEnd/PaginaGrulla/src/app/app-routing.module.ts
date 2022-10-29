import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElegirGradoComponent } from './components/paginaprincipal/elegir-grado.component';
import { PrimerGradoComponent } from './components/primer-grado/primer-grado.component';
import { HomeComponent } from './components/home/home.component';
import { SegundoGradoComponent } from './components/segundo-grado/segundo-grado.component';
import { TercerGradoComponent } from './components/tercer-grado/tercer-grado.component';
import { Resta1Component } from './components/primer-grado/resta1/resta1.component';

const routes: Routes = [
  {path:'elegirgrado', component: ElegirGradoComponent},
  {path:'primer-grado', component: PrimerGradoComponent},
  {path:'',component: HomeComponent},
  {path:'segundo-grado', component: SegundoGradoComponent},
  {path:'tercer-grado', component: TercerGradoComponent},
  {path:'primer-grado/resta1', component: Resta1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
