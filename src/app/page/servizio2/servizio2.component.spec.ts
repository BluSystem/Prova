import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servizio2Component } from './servizio2.component';

describe('Servizio2Component', () => {
  let component: Servizio2Component;
  let fixture: ComponentFixture<Servizio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servizio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servizio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
