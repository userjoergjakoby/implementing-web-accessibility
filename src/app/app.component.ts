import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemCard } from './ui-components/item-card/item-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'accessibilityApp';
  priceRange!: number;

  @ViewChild('ranger') ranger!: ElementRef<HTMLInputElement>;

  filteredItems: ItemCard[] = [];
  items: ItemCard[] = [
    {
      name: 'Item 1',
      image: 'path/to/item/img1',
      link: 'link/to/Item1',
      description: 'short description for Item 1',
      price: 100
    },
    {
      name: 'Item 2',
      image: 'path/to/item/img2',
      link: 'link/to/Item2',
      description: 'short description for Item 2',
      price: 150
    },
    {
      name: 'Item 3',
      image: 'path/to/item/img3',
      link: 'link/to/Item3',
      description: 'short description for Item 3',
      price: 99
    },
    {
      name: 'Item 4',
      image: 'path/to/item/img4',
      link: 'link/to/Item4',
      description: 'short description for Item 4',
      price: 115
    }
  ]

  ngOnInit(): void {
    this.priceRange = 160;
    this.filteredItems = [...this.items];
  }
  
  onPriceRangeChanged(event: any) {
    this.priceRange = event.value;
    this.ranger.nativeElement.ariaValueNow = event.value;
    this.filteredItems = this.items.filter((item) => {
      return item.price <= this.priceRange
    })
  }
}
