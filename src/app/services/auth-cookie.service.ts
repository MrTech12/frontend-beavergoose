import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthCookie } from '../types/AuthCookie';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {

  constructor(private cookieService: CookieService, private router: Router) { }
  
  createAuthCookies(authCookie: AuthCookie) {
    this.cookieService.set("token", authCookie.Token);
    this.cookieService.set("userId", authCookie.UserId);
    this.router.navigateByUrl('files');
  }

  RemoveAuthCookies() {
    this.cookieService.delete("token");
    this.cookieService.delete("userId");
    this.router.navigateByUrl('login');
  }
}
