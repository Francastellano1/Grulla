import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'desktop1',
    loadChildren: () =>
      import('./pages/desktop1/desktop1.module').then((m) => m.Desktop1Module),
  },
  {
    path: 'desktop2',
    loadChildren: () =>
      import('./pages/desktop2/desktop2.module').then((m) => m.Desktop2Module),
  },
  {
    path: 'desktop3',
    loadChildren: () =>
      import('./pages/desktop3/desktop3.module').then((m) => m.Desktop3Module),
  },
  {
    path: 'desktop4',
    loadChildren: () =>
      import('./pages/desktop4/desktop4.module').then((m) => m.Desktop4Module),
  },
  {
    path: 'desktop5',
    loadChildren: () =>
      import('./pages/desktop5/desktop5.module').then((m) => m.Desktop5Module),
  },
  {
    path: 'desktop6',
    loadChildren: () =>
      import('./pages/desktop6/desktop6.module').then((m) => m.Desktop6Module),
  },
  {
    path: 'desktop7',
    loadChildren: () =>
      import('./pages/desktop7/desktop7.module').then((m) => m.Desktop7Module),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
