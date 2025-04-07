import { Component } from '@angular/core';
import { CatMenuComponent } from '../../components/others/catMenu/catMenu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CatMenuComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
