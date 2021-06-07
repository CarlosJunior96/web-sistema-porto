import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiduoOrganicoMarComponent } from './residuo-organico-mar.component';

describe('ResiduoOrganicoMarComponent', () => {
  let component: ResiduoOrganicoMarComponent;
  let fixture: ComponentFixture<ResiduoOrganicoMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResiduoOrganicoMarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiduoOrganicoMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
