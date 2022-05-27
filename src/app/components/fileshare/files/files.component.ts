import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { AuthCookieService } from '../../../services/auth-cookie.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private accountService: AccountService, private authCookieService: AuthCookieService) { }

  ngOnInit(): void {
    this.authCookieService.checkAuthCookies();
  }

}
