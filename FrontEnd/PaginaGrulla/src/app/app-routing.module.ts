import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElegirGradoComponent } from './components/paginaprincipal/elegir-grado.component';
import { PrimerGradoComponent } from './components/primer-grado/primer-grado.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'elegirgrado', component: ElegirGradoComponent},
  {path:'primer-grado', component: PrimerGradoComponent},
  {path:'',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
