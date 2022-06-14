import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { AuthGuard } from './guards/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FilesComponent } from './components/fileshare/files/files.component';
import { SendFileComponent } from './components/fileshare/send-file/send-file.component';
import { RetrieveFileComponent } from './components/fileshare/retrieve-file/retrieve-file.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'files', component: FilesComponent, canActivate: [AuthGuard]},
  {path: 'sendfile', component: SendFileComponent, canActivate: [AuthGuard]},
  {path: 'retrievefile', component: RetrieveFileComponent, canActivate: [AuthGuard]} 
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    FilesComponent,
    SendFileComponent,
    RetrieveFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({config: {
      tokenGetter: undefined,
      allowedDomains: [environment.backend],
      disallowedRoutes: [],
    }})
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
