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

  constructor(private accountService: AccountService, private authCookieService: AuthCookieService, private router: Router) { }

  ngOnInit(): void {
    this.authCookieService.checkAuthCookies();
  }

  onSubmit() {
    if (this.email.errors != null && this.username.errors != null && this.password.errors != null) {
      return null;
    }
    else if (this.email.errors == null && this.username.errors == null && this.password.errors == null) {
      this.backendError = "";

      const register: Register = {
        Email: this.email.value,
        Username: this.username.value,
        Password: this.password.value,
      }

      this.accountService.Register(register).subscribe(data => {
        this.router.navigateByUrl('login');
      }, error => {
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
