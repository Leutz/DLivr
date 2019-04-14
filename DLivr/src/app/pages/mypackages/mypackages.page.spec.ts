import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypackagesPage } from './mypackages.page';

describe('MypackagesPage', () => {
  let component: MypackagesPage;
  let fixture: ComponentFixture<MypackagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypackagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
