import { Component } from '@angular/core';

@Component({
  selector: 'app-productsection',
  templateUrl: './productsection.component.html',
  styleUrl: './productsection.component.css'
})
export class ProductsectionComponent {
  activeTab: string = 'table';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
