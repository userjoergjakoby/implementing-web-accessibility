import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemCardComponent } from './ui-components/item-card/item-card.component';
import { PriceRangeSliderComponent } from './ui-components/price-range-slider/price-range-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    PriceRangeSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
