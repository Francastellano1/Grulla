import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elegir-grado',
  templateUrl: './elegir-grado.component.html',
  styleUrls: ['./elegir-grado.component.css']
})
export class ElegirGradoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  primergrado(){ 
    this.router.navigate(['/primer-grado']);
  }
}
