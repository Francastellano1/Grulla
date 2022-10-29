import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerGradoComponent } from './tercer-grado.component';

describe('TercerGradoComponent', () => {
  let component: TercerGradoComponent;
  let fixture: ComponentFixture<TercerGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerGradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TercerGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
