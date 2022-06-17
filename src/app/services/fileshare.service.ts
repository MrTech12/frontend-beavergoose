import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthCookieService } from './auth-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class FileshareService {

  constructor(private httpClient: HttpClient, private authCookieService: AuthCookieService) { }

  UploadFile(fileInfo: any) {
    const url = `${environment.backend}/gateway/file`;
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authCookieService.retrieveAuthCookies().AccessToken
    });

    return this.httpClient.post<any>(url, fileInfo, {  headers: reqHeader });
  }

  DownloadFile(fileName: string): Observable<any> {
    const url = `${environment.backend}/gateway/file?fileName=${fileName}`;
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authCookieService.retrieveAuthCookies().AccessToken
    });

    return this.httpClient.get<any>(url, {  headers: reqHeader, responseType:  'blob' as 'json' });
  }
}
