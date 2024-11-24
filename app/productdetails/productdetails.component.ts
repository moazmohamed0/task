import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
  selectedTab: string = "shipping";
  product: any;
  quantity: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Access the passed product data
    this.product = history.state.product;
    console.log(this.product);
  }

  generateStarIconsproduct(rating: number, totalStars: number): string {
    let starsHtml = '';
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        starsHtml += `<i class="fa-solid fa-star star"></i>`;
      } else {
        starsHtml += `<i class="fa-regular fa-star star"></i>`;
      }
    }
    return starsHtml;
  }
  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  buynow(){
  this.router.navigate(['paymentmethod']);
  }

  addcart(){
    this.router.navigate(['/card'], { state: { product: this.product, quantity: this.quantity } });
  }

}
