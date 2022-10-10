import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop5',
  templateUrl: 'desktop5.component.html',
  styleUrls: ['desktop5.component.css'],
})
export class Desktop5 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
