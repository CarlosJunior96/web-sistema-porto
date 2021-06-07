import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavioAdminComponent } from './navio-admin.component';

describe('NavioAdminComponent', () => {
  let component: NavioAdminComponent;
  let fixture: ComponentFixture<NavioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
