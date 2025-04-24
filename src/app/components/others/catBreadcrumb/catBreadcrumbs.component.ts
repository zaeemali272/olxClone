import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-catBreadcrumbs',
  imports: [RouterModule],
  templateUrl: './catBreadcrumbs.component.html',
})
export class CatBreadcrumbsComponent {
  @Input() page: any;
}

