import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop6',
  templateUrl: 'desktop6.component.html',
  styleUrls: ['desktop6.component.css'],
})
export class Desktop6 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
