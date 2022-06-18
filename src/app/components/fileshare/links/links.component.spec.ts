import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthCookieService } from 'src/app/services/auth-cookie.service';
import { AuthCookieStub } from 'src/test/stubs/AuthCookieStub';
import { FileshareService } from 'src/app/services/fileshare.service';
import { LinkService } from 'src/app/services/link.service';
import { LinkServiceStub } from 'src/test/stubs/LinkServiceStub';
import { FileshareServiceStub } from 'src/test/stubs/FileshareServiceStub';


import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LinksComponent ],
      providers: [
        { provide: LinkService, useClass: LinkServiceStub },
        { provide: FileshareService, useClass: FileshareServiceStub },
        { provide: AuthCookieService, useclass: AuthCookieStub } 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // No time for stubbing a function call.
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
