import { categories } from './../../../categories';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catMenu',
  imports: [RouterModule,CommonModule],
  templateUrl: './catMenu.component.html',
})
export class CatMenuComponent {
  categories: any = new categories();
}
