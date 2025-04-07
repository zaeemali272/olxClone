import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-carousel',
  imports: [GalleriaModule],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  images: any[] = [
    {
      previewImageSrc:
        'https://images.olx.com.pk/thumbnails/530436012-800x600.webp',
    },
    {
      previewImageSrc:
        'https://www.tofusecret.com/wp-content/uploads/2020/07/NatureRepublic.png',
    },
  ];
}
