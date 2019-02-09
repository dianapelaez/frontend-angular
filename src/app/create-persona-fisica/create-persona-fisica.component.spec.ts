import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonaFisicaComponent } from './create-persona-fisica.component';

describe('CreatePersonaFisicaComponent', () => {
  let component: CreatePersonaFisicaComponent;
  let fixture: ComponentFixture<CreatePersonaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
