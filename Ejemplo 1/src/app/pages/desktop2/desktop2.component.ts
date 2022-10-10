import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop2',
  templateUrl: 'desktop2.component.html',
  styleUrls: ['desktop2.component.css'],
})
export class Desktop2 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
