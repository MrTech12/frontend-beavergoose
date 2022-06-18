import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthCookieService } from './auth-cookie.service';
import { UploadFile } from '../types/UploadFile';

@Injectable({
  providedIn: 'root'
})
export class FileshareService {

  constructor(private httpClient: HttpClient, private authCookieService: AuthCookieService) { }

  UploadFile(uploadFile: UploadFile) {
    const SenderId = this.authCookieService.retrieveUserId();
    const url = `${environment.backend}/gateway/file`;

    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authCookieService.retrieveAuthCookies().AccessToken
    });

    uploadFile.SenderId = SenderId;

    return this.httpClient.post<any>(url, uploadFile, { headers: reqHeader });
  }

  DownloadFile(fileName: string): Observable<any> {
    const url = `${environment.backend}/gateway/file?fileName=${fileName}`;
    
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authCookieService.retrieveAuthCookies().AccessToken
    });

    return this.httpClient.get<any>(url, { headers: reqHeader, responseType:  'blob' as 'json' });
  }
}
