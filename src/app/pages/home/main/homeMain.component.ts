import { Component } from '@angular/core';
import { CarouselComponent } from '../../../components/others/carousel/carousel.component';
import { CatWithImagesComponent } from '../../../components/others/cat-with-images/cat-with-images.component';
import { CatListComponent } from '../../../components/others/catList/catList.component';

@Component({
  selector: 'app-homeMain',
  imports: [CarouselComponent,CatWithImagesComponent,CatListComponent],
  templateUrl: './homeMain.component.html',
})
export class HomeMainComponent {}
