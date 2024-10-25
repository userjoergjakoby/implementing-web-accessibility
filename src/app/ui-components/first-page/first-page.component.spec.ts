import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstPageComponent} from './first-page.component';
import {axe, toHaveNoViolations} from "jasmine-axe";

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageComponent]
    });
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.addMatchers(toHaveNoViolations);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(fixture.nativeElement)).toHaveNoViolations();
  });
});

