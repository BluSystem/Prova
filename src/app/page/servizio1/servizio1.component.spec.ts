import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servizio1Component } from './servizio1.component';

describe('Servizio1Component', () => {
  let component: Servizio1Component;
  let fixture: ComponentFixture<Servizio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servizio1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servizio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
