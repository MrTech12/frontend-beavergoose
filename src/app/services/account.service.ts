import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Login } from '../types/Login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  Login(login: Login): Observable<any>{
    return this.httpClient.post<Login>(`${environment.apiGateway}account/login`, login);
  }

  Register() {

  }
}
