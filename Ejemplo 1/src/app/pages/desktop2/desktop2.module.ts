import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Desktop2 } from './desktop2.component'

const routes = [
  {
    path: '',
    component: Desktop2,
  },
]

@NgModule({
  declarations: [Desktop2],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Desktop2],
})
export class Desktop2Module {}
