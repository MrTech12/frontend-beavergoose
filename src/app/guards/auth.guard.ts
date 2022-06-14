import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthCookieService } from '../services/auth-cookie.service';
import { TokenService } from '../services/token.service';
import { AuthCookie } from '../types/AuthCookie';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private router: Router, private jwtHelper: JwtHelperService, private authCookieService: AuthCookieService, private tokenService: TokenService){}
  
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const AuthTokens = this.authCookieService.retrieveAuthCookies();

    if (AuthTokens.AccessToken && !this.jwtHelper.isTokenExpired(AuthTokens.AccessToken)){
      return true;
    }

    const isRefreshSuccess = await this.tryRefreshingTokens(AuthTokens.AccessToken); 
    if (!isRefreshSuccess) { 
      this.router.navigate(["login"]); 
    }
    return isRefreshSuccess;
  }

  private async tryRefreshingTokens(token: string): Promise<boolean> {
    const AuthTokens = this.authCookieService.retrieveAuthCookies();
    
    if (!token || !AuthTokens.RefreshToken) { 
      return false;
    }
    
    let isRefreshSuccess: boolean = false;
    const authCookie: AuthCookie = {
      AccessToken: AuthTokens.AccessToken,
      RefreshToken: AuthTokens.RefreshToken
    }
    
    this.tokenService.RefreshTokens(authCookie).subscribe(data => {
      const newAuthValues: AuthCookie = {
        AccessToken: data.accessToken,
        RefreshToken: data.refreshToken
      }
      this.authCookieService.refreshAuthCookies(newAuthValues);
      isRefreshSuccess = true;
    }, error => {
      isRefreshSuccess = false;
    })

    return isRefreshSuccess;
  }
}