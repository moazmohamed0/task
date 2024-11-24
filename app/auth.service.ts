import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private cookieService: CookieService ) { }

  loginWithGoogle() {
    window.location.href = 'http://localhost:5500/auth/google';
  }



  getUserProfile() {
    return this.http.get('http://localhost:5500/profile', { withCredentials: true });
  }
}
