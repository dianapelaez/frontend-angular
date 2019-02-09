import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonaJuridicaComponent } from './create-persona-juridica.component';

describe('CreatePersonaJuridicaComponent', () => {
  let component: CreatePersonaJuridicaComponent;
  let fixture: ComponentFixture<CreatePersonaJuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonaJuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
