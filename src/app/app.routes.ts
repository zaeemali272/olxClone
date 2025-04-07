import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatMobileComponent } from './pages/categories/mobilePhones/mobiles.component';
import { CatCarsComponent } from './pages/categories/cars/cars.component';
import { HomeMainComponent } from './pages/home/main/homeMain.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'main', component: HomeMainComponent },
      { path: 'mobiles', component: CatMobileComponent },
      { path: 'cars', component: CatCarsComponent },
    ],
  },
  { path: '**', redirectTo: 'home/main', pathMatch: 'full' },
];
