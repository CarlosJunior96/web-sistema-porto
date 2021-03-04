import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescarteLixoNavioComponent } from './descarte-lixo-navio.component';

describe('DescarteLixoNavioComponent', () => {
  let component: DescarteLixoNavioComponent;
  let fixture: ComponentFixture<DescarteLixoNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescarteLixoNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescarteLixoNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
