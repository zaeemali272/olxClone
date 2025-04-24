import { categories } from './../../../categories';
import { CommonModule } from '@angular/common';
import { products } from './../../../products';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cat',
  imports: [CommonModule, RouterModule],
  templateUrl: './cat.component.html',
})
export class CatComponent {
  products: any = new products();
  categories: any = new categories();
}
