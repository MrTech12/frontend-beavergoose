import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthCookie } from '../types/AuthCookie';

@Injectable({
  providedIn: 'root'
})
export class AuthCookieService {

  constructor(private cookieService: CookieService, private router: Router) { }
  
  createAuthCookies(authCookie: AuthCookie, userId: string) {
    this.cookieService.set("AccessToken", authCookie.AccessToken);
    this.cookieService.set("RefreshToken", authCookie.RefreshToken);
    this.cookieService.set("UserId", userId);
    this.router.navigateByUrl('files');
  }

  refreshAuthCookies(authCookie: AuthCookie) {
    this.cookieService.set("AccessToken", authCookie.AccessToken);
    this.cookieService.set("RefreshToken", authCookie.RefreshToken);
  }

  retrieveAuthCookies() {
    const authCookie: AuthCookie = {
      AccessToken: this.cookieService.get("AccessToken"),
      RefreshToken: this.cookieService.get("RefreshToken")
    }
    return authCookie;
  }

  RemoveAuthCookies() {
    this.cookieService.delete("AccessToken")
    this.cookieService.delete("RefreshToken")
    this.cookieService.delete("UserId")
    this.router.navigateByUrl('login');
  }
}
