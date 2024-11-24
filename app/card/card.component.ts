import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product: any;
  quantity: number = 1;
  count: number = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the passed product data
    this.product = history.state.product;
    this.quantity = history.state.quantity || 1;  // Default quantity to 1 if not passed
    console.log(this.product);
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increaseCount(): void {
    this.count++;
  }

  // Decrease count
  decreaseCount(): void {
    if (this.count > 1) {
      this.count--;
    }
  }
  getSubtotal(): number {
    return this.product.price * this.quantity * this.count;
  }

  // Calculate total (Subtotal + 50 EGP Delivery Fee)
  getTotal(): number {
    return this.getSubtotal() + 50;
  }
  procedtocheck(){
    this.router.navigate(['/shippingaddress'], { state: { product: this.product, quantity: this.quantity } });
  }
}

