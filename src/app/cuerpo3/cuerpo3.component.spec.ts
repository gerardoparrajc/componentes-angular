import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuerpo3Component } from './cuerpo3.component';

describe('Cuerpo3Component', () => {
  let component: Cuerpo3Component;
  let fixture: ComponentFixture<Cuerpo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuerpo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuerpo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
