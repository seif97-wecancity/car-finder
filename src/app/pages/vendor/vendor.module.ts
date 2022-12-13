import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbNavModule, NgbCarouselModule, NgbProgressbarModule, NgbRatingModule, NgbCollapseModule, NgbAccordionModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Google Map
import { AgmCoreModule } from '@agm/core';

// Drop Zone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Swiper Slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Component
import { VendorRoutingModule } from "./vendor-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { PropertyPromotionComponent } from './property-promotion/property-promotion.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { VendorComponent } from './vendor/vendor.component';

import { SortByVendorPipe } from '../vendor/sort-by.pipe';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    PropertyPromotionComponent,
    SellCarComponent,
    VendorComponent,
    SortByVendorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbCarouselModule,
    VendorRoutingModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbTooltipModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    DropzoneModule,
    SwiperModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class VendorModule { }
