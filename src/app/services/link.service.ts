import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Link } from '../types/Link';
import { AuthCookieService } from './auth-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private httpClient: HttpClient, private authCookieService: AuthCookieService) { }

  RetrieveAllLinks(): Observable<Link[]> {
    const receiverId = this.authCookieService.retrieveUserId();
    const url = `${environment.backend}/gateway/link?receiverID=${receiverId}`;
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authCookieService.retrieveAuthCookies().AccessToken
    });

    return this.httpClient.get<Link[]>(url, { headers: reqHeader });
  }
}
