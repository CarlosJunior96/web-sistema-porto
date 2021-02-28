import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEstoqueComponent } from './cadastrar-estoque.component';

describe('CadastrarEstoqueComponent', () => {
  let component: CadastrarEstoqueComponent;
  let fixture: ComponentFixture<CadastrarEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
