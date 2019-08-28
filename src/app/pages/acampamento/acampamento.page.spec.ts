import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcampamentoPage } from './acampamento.page';

describe('AcampamentoPage', () => {
  let component: AcampamentoPage;
  let fixture: ComponentFixture<AcampamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcampamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcampamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
