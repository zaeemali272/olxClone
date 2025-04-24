import { Component } from '@angular/core';
import { cart } from '../../../cart';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  cart:any = new cart();
  totalprice:any = 0;
}
