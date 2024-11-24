import { Component } from '@angular/core';
import { ApiuserService } from '../apiuser.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

declare var bootstrap: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showPassword: boolean = false;
  email: string = '';
  password: string = '';
  toastMessage: string = '';

  constructor(private ApiuserService : ApiuserService , private router : Router) {}

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
  onSubmit2() {
    const userData = {
      email: this.email.trim(),
      password: this.password.trim(),
    };

    this.ApiuserService.loginUser(userData).subscribe(
      async (response) => {
        localStorage.setItem('authToken', response);

        const user = await this.ApiuserService.fetchUserByEmail(this.email.trim()).toPromise();

        localStorage.setItem('username', user.username);
        localStorage.setItem('email', user.email);

        if (user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400 || error.status === 404) {
          this.showToastMessage('The email address and password combination do not match any account. Please try again...');
        } else {
          console.error('Error during login:', error);
          this.showToastMessage('An error occurred during login.');
        }
      }
    );
  }



  onclick(){
    this.router.navigate(['/forgot-password']);
  }

  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast();

    setTimeout(() => {
      this.closeToast();
    }, 3500);
  }
  togglePassword() {
    this.showPassword = !this.showPassword;

    if (this.showPassword) {
      setTimeout(() => {
        this.showPassword = false;
      }, 2500);
    }
  }
}
