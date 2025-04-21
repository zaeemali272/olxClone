import { products } from './../../../products';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [CommonModule,RouterModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  products = new products();
  @Input() cat: any;

}


