import { Component } from '@angular/core';
import { DashboardSidebarComponent } from '../../../components/others/dashboard-sidebar/dashboard-sidebar.component';
import { DashPageComponent } from '../../../components/main/dash-page/dash-page.component';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardSidebarComponent,DashPageComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

}
