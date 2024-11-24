import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrl: './paymentmethod.component.css'
})
export class PaymentmethodComponent {
  toastMessage: string = '';

  constructor(private router:Router){}
  showToast() {
    const toastEl = document.getElementById('toast-warning');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  closeToast() {
    const toastEl = document.getElementById('toast-warning');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.hide();
    }
  }

  show() {
    this.showToastMessage("The payment is Done"); // Corrected to 'this.showToastMessage'
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast();

    setTimeout(() => {
      this.closeToast();
    }, 3000);
  }
}
