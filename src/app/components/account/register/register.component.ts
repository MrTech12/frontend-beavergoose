import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { AuthCookieService } from '../../../services/auth-cookie.service';
import {Register} from '../../../types/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email, Validators.pattern(/\S+@\S+\.\S/g)]);
  username = new FormControl('', [Validators.required,]);
  password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/[^0-9a-zA-Z][.!@#$%^&*()-__=+;:'"\\|,.<>/?{}[/`~]/g)]);
  backendError: string = "";
  hideSpinner: boolean = true;
  disableRegisterBtn: boolean = false;

  constructor(private accountService: AccountService, private authCookieService: AuthCookieService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.email.errors != null && this.username.errors != null && this.password.errors != null) {
      return null;
    }
    else if (this.email.errors == null && this.username.errors == null && this.password.errors == null) {
      this.backendError = "";
      this.disableRegisterBtn = true;
      this.hideSpinner = false;

      const register: Register = {
        Email: this.email.value,
        Username: this.username.value,
        Password: this.password.value,
      }

      this.accountService.Register(register).subscribe(data => {
        this.router.navigateByUrl('login');
      }, error => {
        this.hideSpinner = true;
        this.disableRegisterBtn = false;

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
