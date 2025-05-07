import { products } from './../../../products';
import { categories } from './../../../categories';
import { Component, inject, Input } from "@angular/core";
import { CatBreadcrumbsComponent } from "../../../components/others/catBreadcrumb/catBreadcrumbs.component";
import { SideFilterComponent } from "../../../components/others/side-filter/side-filter.component";
import { CardComponent } from '../../../components/others/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cat-page',
  imports: [CatBreadcrumbsComponent, SideFilterComponent, CardComponent, CommonModule],
  templateUrl: './catPage.component.html',
})
export class CatPageComponent {
  public mobiles: any = ['mobiles'];
  cat: any;
  categories = new categories();
  products = new products().all;
  Mobiles: 'Mobiles' = 'Mobiles';
  Bikes: 'Bikes' = 'Bikes';
  route: ActivatedRoute = inject(ActivatedRoute);
  category;

  constructor() {
    this.category = String(this.route.snapshot.params['category']);
  }
}