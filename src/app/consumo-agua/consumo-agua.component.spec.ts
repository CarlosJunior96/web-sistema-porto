import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoAguaComponent } from './consumo-agua.component';

describe('ConsumoAguaComponent', () => {
  let component: ConsumoAguaComponent;
  let fixture: ComponentFixture<ConsumoAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
