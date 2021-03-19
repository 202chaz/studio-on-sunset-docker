import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  config: SwiperOptions = {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    slidesPerView: 'auto',
    mousewheel: {
      releaseOnEdges: true
    },
    spaceBetween: 20,
    freeMode: true,
  };

  constructor() { }

  ngOnInit(): void {
  }
}
