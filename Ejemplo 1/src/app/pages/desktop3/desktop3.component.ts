import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-desktop3',
  templateUrl: 'desktop3.component.html',
  styleUrls: ['desktop3.component.css'],
})
export class Desktop3 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
