import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidenteNavioComponent } from './acidente-navio.component';

describe('AcidenteNavioComponent', () => {
  let component: AcidenteNavioComponent;
  let fixture: ComponentFixture<AcidenteNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcidenteNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidenteNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
