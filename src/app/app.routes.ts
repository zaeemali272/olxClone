import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatMobileComponent } from './pages/categories/mobilePhones/mobiles.component';
import { CatCarsComponent } from './pages/categories/cars/cars.component';
import { HomeMainComponent } from './pages/home/main/homeMain.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'main', component: HomeMainComponent },
      { path: 'mobiles', component: CatMobileComponent },
      { path: 'cars', component: CatCarsComponent },
      // { path: 'product', component: ProductComponent },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductComponent },
  {path: 'category/:category', component: CatMobileComponent},
  { path: '**', redirectTo: 'home/main', pathMatch: 'full' },
];
