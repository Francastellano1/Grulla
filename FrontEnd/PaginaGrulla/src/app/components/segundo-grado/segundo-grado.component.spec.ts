import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoGradoComponent } from './segundo-grado.component';

describe('SegundoGradoComponent', () => {
  let component: SegundoGradoComponent;
  let fixture: ComponentFixture<SegundoGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoGradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
