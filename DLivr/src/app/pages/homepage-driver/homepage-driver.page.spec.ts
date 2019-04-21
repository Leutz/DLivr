import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDriverPage } from './homepage-driver.page';

describe('HomepageDriverPage', () => {
  let component: HomepageDriverPage;
  let fixture: ComponentFixture<HomepageDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageDriverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
