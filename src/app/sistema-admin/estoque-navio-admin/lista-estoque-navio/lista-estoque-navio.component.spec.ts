import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstoqueNavioComponent } from './lista-estoque-navio.component';

describe('ListaEstoqueNavioComponent', () => {
  let component: ListaEstoqueNavioComponent;
  let fixture: ComponentFixture<ListaEstoqueNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstoqueNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstoqueNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
