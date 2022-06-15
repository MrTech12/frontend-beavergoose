import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileshareService {

  constructor(private httpClient: HttpClient) { }

  UploadFile() {

  }

  DownloadFile() {

  }
}
