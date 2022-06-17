import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Login } from '../types/Login';
import { Register } from '../types/Register';
import { FileReceiver } from '../types/FileReciever';
import { AuthCookieService } from './auth-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient, private authCookieService: AuthCookieService) { }

  Login(login: Login): Observable<any>{
    return this.httpClient.post<Login>(`${environment.backend}/gateway/account/login`, login);
  }

  Register(register: Register): Observable<any> {
    return this.httpClient.post<Login>(`${environment.backend}/gateway/account/register`, register);
  }

  getAllUsers(): Observable<FileReceiver[]> {
    const url = `${environment.backend}/gateway/account/users`;

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authCookieService.retrieveAuthCookies().AccessToken
    });

    return this.httpClient.get<FileReceiver[]>(url, { headers: reqHeader });
  }
}
