import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspecoesNavioComponent } from './inspecoes-navio.component';

describe('InspecoesNavioComponent', () => {
  let component: InspecoesNavioComponent;
  let fixture: ComponentFixture<InspecoesNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspecoesNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspecoesNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
