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

    let formData = new FormData();
    formData.append("File", uploadFile.File);
    formData.append("SenderId", SenderId);
    formData.append("ReceiverId", uploadFile.ReceiverId);
    formData.append("AllowedDownloads", uploadFile.AllowedDownloads);

    var reqHeader = new HttpHeaders({ 
      'Authorization': 'Bearer ' + this.authCookieService.retrieveAuthCookies().AccessToken
    });

    return this.httpClient.post<any>(url, formData, { headers: reqHeader });
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
