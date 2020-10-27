import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servizio3Component } from './servizio3.component';

describe('Servizio3Component', () => {
  let component: Servizio3Component;
  let fixture: ComponentFixture<Servizio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servizio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servizio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
