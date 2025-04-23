import { products } from './../../../products';
import { categories } from './../../../categories';
import { Component, Input } from "@angular/core";
import { CatBreadcrumbsComponent } from "../../../components/others/catBreadcrumb/catBreadcrumbs.component";
import { SideFilterComponent } from "../../../components/others/side-filter/side-filter.component";
import { CardComponent } from '../../../components/others/card/card.component';

@Component({
  selector: 'cat-mobiles',
  imports: [CatBreadcrumbsComponent,SideFilterComponent,CardComponent],
  templateUrl: './mobiles.component.html',
})
export class CatMobileComponent {
  public mobiles: any = ["mobiles"];
  cat: any;
  categories = new categories();
   products = new products().all;
    Mobiles: 'Mobiles' = 'Mobiles';
    Bikes: 'Bikes' = 'Bikes';
}