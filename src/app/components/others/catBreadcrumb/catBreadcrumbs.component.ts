import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-catBreadcrumbs',
  imports: [],
  templateUrl: './catBreadcrumbs.component.html',
})
export class CatBreadcrumbsComponent {
  @Input() page: any;
}

