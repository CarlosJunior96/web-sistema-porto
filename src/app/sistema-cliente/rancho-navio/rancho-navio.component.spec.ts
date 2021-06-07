import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanchoNavioComponent } from './rancho-navio.component';

describe('RanchoNavioComponent', () => {
  let component: RanchoNavioComponent;
  let fixture: ComponentFixture<RanchoNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RanchoNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RanchoNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
