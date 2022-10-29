import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerGradoComponent } from './primer-grado.component';

describe('PrimerGradoComponent', () => {
  let component: PrimerGradoComponent;
  let fixture: ComponentFixture<PrimerGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerGradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
