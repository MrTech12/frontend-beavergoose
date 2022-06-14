import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthCookie } from '../types/AuthCookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient: HttpClient) { }

  RefreshTokens(authcookie: AuthCookie): Observable<any> {
    return this.httpClient.post<AuthCookie>(`${environment.apiGateway}account/token/refresh`, authcookie);
  }
}
