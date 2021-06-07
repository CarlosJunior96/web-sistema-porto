import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaPortuariaNavioComponent } from './despesa-portuaria-navio.component';

describe('DespesaPortuariaNavioComponent', () => {
  let component: DespesaPortuariaNavioComponent;
  let fixture: ComponentFixture<DespesaPortuariaNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesaPortuariaNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaPortuariaNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
