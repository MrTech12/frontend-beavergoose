import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FileOverviewComponent } from './components/fileshare/file-overview/file-overview.component';
import { FilesComponent } from './components/fileshare/files/files.component';
import { SendFileComponent } from './components/fileshare/send-file/send-file.component';
import { RetrieveFileComponent } from './components/fileshare/retrieve-file/retrieve-file.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    FileOverviewComponent,
    FilesComponent,
    SendFileComponent,
    RetrieveFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
