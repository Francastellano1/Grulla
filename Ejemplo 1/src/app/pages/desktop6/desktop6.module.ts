import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop6 } from './desktop6.component'

const routes = [
  {
    path: '',
    component: Desktop6,
  },
]

@NgModule({
  declarations: [Desktop6],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop6],
})
export class Desktop6Module {}
