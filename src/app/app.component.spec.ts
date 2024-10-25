import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {axe, toHaveNoViolations} from 'jasmine-axe';
import {PriceRangeSliderComponent} from "./ui-components/price-range-slider/price-range-slider.component";
import {ItemCardComponent} from "./ui-components/item-card/item-card.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, PriceRangeSliderComponent, ItemCardComponent]
  }));

  beforeEach(() => jasmine.addMatchers(toHaveNoViolations));

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
    expect(await axe(fixture.nativeElement)).toHaveNoViolations();
  });

  it(`should have as title 'accessibilityApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('accessibilityApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.innerText).toContain('Products App');
  });
});
