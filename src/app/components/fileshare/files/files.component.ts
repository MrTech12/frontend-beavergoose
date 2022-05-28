import { Component, OnInit } from '@angular/core';
import { AuthCookieService } from '../../../services/auth-cookie.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private authCookieService: AuthCookieService) { }

  ngOnInit(): void {
  }

  Logout() {
    this.authCookieService.RemoveAuthCookies();
  }

}
