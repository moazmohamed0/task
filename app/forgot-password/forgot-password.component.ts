import { Component } from '@angular/core';
import { ApiuserService } from '../apiuser.service';
import { Router } from '@angular/router';

declare var bootstrap: any;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = '';
  toastMessage: string = '';

  constructor(private ApiuserService : ApiuserService , private router : Router) {}

  onSubmit3() {
    const email = this.email;
    localStorage.setItem('email', email);

    this.ApiuserService.requestPasswordReset(this.email).subscribe(
      response => {
        console.log('Reset link sent:', response);
        this.router.navigate(['/verification-code']);
      },
      error => {
        console.error('Error sending reset link:', error);
        const errorMessage = error.error && error.error.message ? error.error.message : 'User not found.';
        this.showToastMessage(errorMessage);
      }
    );
  }

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

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast();

    setTimeout(() => {
      this.closeToast();
    }, 3000);
  }

  onclick(){
    this.router.navigate(['/login']);
  }

}
