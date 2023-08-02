import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-price-range-slider',
  templateUrl: './price-range-slider.component.html',
  styleUrls: ['./price-range-slider.component.scss']
})
export class PriceRangeSliderComponent implements OnInit, AfterViewInit {

  selectedPrice: number = 150;

  @ViewChild('ranger') ranger!: ElementRef<HTMLInputElement>;
  
  @Input() valueMin: string = '1';
  @Input() valueMax: string = '200';
  @Output() onChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.ranger.nativeElement.ariaValueMin = this.valueMin;
    this.ranger.nativeElement.ariaValueMax = this.valueMax;
    this.ranger.nativeElement.ariaValueNow = this.selectedPrice.toString();
  }
  
  onPriceRangeChanged(event: any) {
    this.selectedPrice = event.value;
    this.ranger.nativeElement.ariaValueNow = event.value;
    this.onChanged.emit(Number(event.value));
  }

}
