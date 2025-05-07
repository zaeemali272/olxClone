import { AuthService } from './../../../shared/auth/auth.service';
import { Component, inject } from '@angular/core';
import { cart } from '../../../cart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  cart: any = new cart();
  totalprice: any = 0;
  private authService: AuthService = inject(AuthService);
  public user = this.authService.user;
  public isMenuOpen = false;
  public defaultImg =
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

  public logOut() {
    this.authService.logout();
  }
}
