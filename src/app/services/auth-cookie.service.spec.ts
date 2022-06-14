import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CookieServiceStub } from '../../test/stubs/CookieServiceStub';
import { RouterStub } from '../../test/stubs/RouterStub';

import { AuthCookieService } from './auth-cookie.service';

describe('AuthCookieService', () => {
  let service: AuthCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCookieService,
        { provide: CookieService, useClass: CookieServiceStub },
        { provide: Router, useClass: RouterStub }]
    });
    service = TestBed.inject(AuthCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
