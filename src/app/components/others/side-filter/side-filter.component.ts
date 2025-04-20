import { CommonModule } from '@angular/common';
import { categories } from './../../../categories';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-filter',
  imports: [CommonModule],
  templateUrl: './side-filter.component.html',
})
export class SideFilterComponent {
  @Input() page: any;
  @Input() cat: any;
  categories = new categories();

}
