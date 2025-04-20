import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { products } from '../../../products';


@Component({
  selector: 'app-catList',
  imports: [CardComponent],
  templateUrl: './catList.component.html',
})
export class CatListComponent {
  products = new products();
 
}
