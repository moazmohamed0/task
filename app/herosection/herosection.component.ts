import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css'
})
export class HerosectionComponent {

  constructor( private router : Router ) {}

  shopnow(){
  this.router.navigate(['/filters']);
  }
}
