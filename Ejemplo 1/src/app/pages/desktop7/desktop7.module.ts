import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop7 } from './desktop7.component'

const routes = [
  {
    path: '',
    component: Desktop7,
  },
]

@NgModule({
  declarations: [Desktop7],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop7],
})
export class Desktop7Module {}
