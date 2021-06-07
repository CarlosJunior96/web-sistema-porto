import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueNavioAdminComponent } from './estoque-navio-admin.component';

describe('EstoqueNavioAdminComponent', () => {
  let component: EstoqueNavioAdminComponent;
  let fixture: ComponentFixture<EstoqueNavioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoqueNavioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueNavioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
