import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveFileComponent } from './retrieve-file.component';

describe('RetrieveFileComponent', () => {
  let component: RetrieveFileComponent;
  let fixture: ComponentFixture<RetrieveFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
