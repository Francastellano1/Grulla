import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop7',
  templateUrl: 'desktop7.component.html',
  styleUrls: ['desktop7.component.css'],
})
export class Desktop7 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
