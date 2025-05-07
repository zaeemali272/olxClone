import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeMainComponent } from './pages/home/main/homeMain.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CatPageComponent } from './pages/categories/mobilePhones/catPage.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { SignupComponent } from './pages/Auth/signup/signup.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { DashAddComponent } from './components/others/dash-add/dash-add.component';
import { DefaultComponent } from './pages/admin/dashboard/default/default.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'main', component: HomeMainComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      // { path: 'product', component: ProductComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DefaultComponent,
      },
      { path: 'addproduct', component: DashAddComponent },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'category/:category', component: CatPageComponent },
  { path: '**', redirectTo: 'home/main', pathMatch: 'full' },
];
