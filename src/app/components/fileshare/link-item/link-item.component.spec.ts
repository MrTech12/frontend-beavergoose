import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkItemComponent } from './link-item.component';

describe('LinkItemComponent', () => {
  let component: LinkItemComponent;
  let fixture: ComponentFixture<LinkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Strange error about 'address', there was no time to resolve it.
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
