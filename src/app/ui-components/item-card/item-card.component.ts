import { Component, Input } from '@angular/core';

export interface ItemCard {
  name: string;
  link: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() name: string = '';
  @Input() link: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
}
