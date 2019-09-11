import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaComponent } from './nota.component';

describe('NotaComponent', () => {
  let component: NotaComponent;
  let fixture: ComponentFixture<NotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
