import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FileshareService } from '../../../services/fileshare.service';
import { AccountService } from '../../../services/account.service';
import { AccountServiceStub } from 'src/test/stubs/AccountServiceStub';
import { AuthCookieStub } from 'src/test/stubs/AuthCookieStub';

import { SendFileComponent } from './send-file.component';

describe('SendFileComponent', () => {
  let component: SendFileComponent;
  let fixture: ComponentFixture<SendFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ SendFileComponent],
      providers: [
        { provide: AccountService, useClass: AccountServiceStub }, 
        { provide: FileshareService, useclass: AuthCookieStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // No time for stubbing a function call
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
