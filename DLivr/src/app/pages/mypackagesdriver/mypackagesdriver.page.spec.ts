import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypackagesdriverPage } from './mypackagesdriver.page';

describe('MypackagesdriverPage', () => {
  let component: MypackagesdriverPage;
  let fixture: ComponentFixture<MypackagesdriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypackagesdriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypackagesdriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
