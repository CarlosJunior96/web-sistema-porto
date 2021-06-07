import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoOleoComponent } from './consumo-oleo.component';

describe('ConsumoOleoComponent', () => {
  let component: ConsumoOleoComponent;
  let fixture: ComponentFixture<ConsumoOleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoOleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoOleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
