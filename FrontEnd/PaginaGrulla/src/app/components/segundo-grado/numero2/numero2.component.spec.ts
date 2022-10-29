import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numero2Component } from './numero2.component';

describe('Numero2Component', () => {
  let component: Numero2Component;
  let fixture: ComponentFixture<Numero2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Numero2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Numero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
