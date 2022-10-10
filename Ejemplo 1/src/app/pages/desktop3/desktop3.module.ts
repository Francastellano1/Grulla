import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop3 } from './desktop3.component'

const routes = [
  {
    path: '',
    component: Desktop3,
  },
]

@NgModule({
  declarations: [Desktop3],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop3],
})
export class Desktop3Module {}
