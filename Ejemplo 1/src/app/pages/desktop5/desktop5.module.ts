import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop5 } from './desktop5.component'

const routes = [
  {
    path: '',
    component: Desktop5,
  },
]

@NgModule({
  declarations: [Desktop5],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop5],
})
export class Desktop5Module {}
