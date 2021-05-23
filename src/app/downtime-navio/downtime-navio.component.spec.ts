import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntimeNavioComponent } from './downtime-navio.component';

describe('DowntimeNavioComponent', () => {
  let component: DowntimeNavioComponent;
  let fixture: ComponentFixture<DowntimeNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowntimeNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DowntimeNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
