import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';

// Swiper Slider
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

import { popular, latestCar, news } from './home1.model';
import { popularData, latestCarData, newsData } from './data';

@Component({
  selector: 'app-index',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})

/**
 * Index Component
 */
export class Home1Component implements OnInit {

  popularData!: popular[];
  latestCarData!: latestCar[];
  newsData!: news[];

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
     // Chat Data Get Function
     this._fetchData();

    //  Make Select data
     document.getElementById("make-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const mack = document.querySelector('.make') as HTMLElement;
      mack.innerText = input.innerText;
     });

    //  Model Select data
    document.getElementById("model-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const model = document.querySelector('.model') as HTMLElement;
      model.innerText = input.innerText;
     });

    // Type Select data
    document.getElementById("type-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const type = document.querySelector('.type') as HTMLElement;
      type.innerText = input.innerText;
    });

    // Location Select data
    document.getElementById("location-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.location') as HTMLElement;
      location.innerText = input.innerText;
    });

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }

  }

   // Chat Data Fetch
   private _fetchData() {
    this.popularData = popularData;
    this.latestCarData = latestCarData;
    this.newsData = newsData;
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true
  };

  /**
   * Latest Car Swiper setting
   */
   LatestCar = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
    navigation: true,
    loop: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 3,
      }
    }
  };

  /**
   * Swiper setting
   */
   CTA = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true
  };

  /**
   * News Swiper setting
   */
   news = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
    loop: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 3,
      }
    }
  };

}
