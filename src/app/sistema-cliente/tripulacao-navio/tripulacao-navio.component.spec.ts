import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripulacaoNavioComponent } from './tripulacao-navio.component';

describe('TripulacaoNavioComponent', () => {
  let component: TripulacaoNavioComponent;
  let fixture: ComponentFixture<TripulacaoNavioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripulacaoNavioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripulacaoNavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
