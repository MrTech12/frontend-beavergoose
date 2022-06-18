import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterStub } from '../../test/stubs/RouterStub';
import { AuthCookieService } from 'src/app/services/auth-cookie.service';
import { AuthCookieStub } from 'src/test/stubs/AuthCookieStub';

import { LinkService } from './link.service';

describe('LinkService', () => {
  let service: LinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [LinkService, { provide: Router, useClass: RouterStub }, { provide: AuthCookieService, useclass: AuthCookieStub }]
    });
    service = TestBed.inject(LinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
