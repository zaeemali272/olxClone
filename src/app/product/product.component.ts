import { CommonModule } from '@angular/common';
import { products } from './../products';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  products: any = new products();
  
  // this gets the id from the url
  // this is the same as using the constructor
  // but this is a better way to do it
  route: ActivatedRoute = inject(ActivatedRoute);
  productId = -1;
  
  
  constructor() {
    this.productId = Number(this.route.snapshot.params['id']);
  }
}
