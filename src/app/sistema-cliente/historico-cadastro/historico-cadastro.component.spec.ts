import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCadastroComponent } from './historico-cadastro.component';

describe('HistoricoCadastroComponent', () => {
  let component: HistoricoCadastroComponent;
  let fixture: ComponentFixture<HistoricoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
