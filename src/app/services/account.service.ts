import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Login } from '../types/Login';
import { Register } from '../types/Register';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  Login(login: Login): Observable<any>{
    return this.httpClient.post<Login>(`${environment.backend}/gateway/account/login`, login);
  }

  Register(register: Register): Observable<any> {
    return this.httpClient.post<Login>(`${environment.backend}/gateway/account/register`, register);
  }
}
