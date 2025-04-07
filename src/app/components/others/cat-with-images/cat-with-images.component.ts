import { Component } from '@angular/core';
import { CatComponent } from '../cat/cat.component';

@Component({
  selector: 'app-cat-with-images',
  imports: [CatComponent],
  templateUrl: './cat-with-images.component.html',
})
export class CatWithImagesComponent {

}
