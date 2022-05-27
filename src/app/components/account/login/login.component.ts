import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { AuthCookieService } from '../../../services/auth-cookie.service';
import { Login } from '../../../types/Login';
import { AuthCookie } from '../../../types/AuthCookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  backendError: string = "";
  hideSpinner: boolean = true;
  disableLoginBtn: boolean = false;

  constructor(private accountService: AccountService, private authCookieService: AuthCookieService) { }

  ngOnInit(): void {
    this.authCookieService.checkAuthCookies();
  }

  onSubmit() {
    if (this.username.errors != null && this.password.errors != null) {
      return null;
    }
    else if (this.username.errors == null && this.password.errors == null) {
      this.backendError = "";
      this.disableLoginBtn = true;
      this.hideSpinner = false;

      const login: Login = {
        Username: this.username.value,
        Password: this.password.value,
      }

      this.accountService.Login(login).subscribe(data => {
        const authCookie: AuthCookie = {
          Token: data.token,
          UserId: data.userId
        }

        this.authCookieService.createAuthCookies(authCookie);
      }, error => {
        this.hideSpinner = true;
        this.disableLoginBtn = false;

        if(error.error.message == undefined) {
          this.backendError = "server not available";
        } else {
          this.backendError = error.error.message;
        }
      });
    }
    return null;
  }
}
