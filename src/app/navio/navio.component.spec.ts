import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavioComponent } from './navio.component';

describe('NavioComponent', () => {
  let component: NavioComponent;
  let fixture: ComponentFixture<NavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
