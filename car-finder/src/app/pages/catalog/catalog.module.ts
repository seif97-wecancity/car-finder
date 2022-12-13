import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbRatingModule, NgbTooltipModule, NgbCollapseModule, NgbAccordionModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

// Ngx Sliders
import { NgxSliderModule } from '@angular-slider/ngx-slider';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Component
import { CatalogRoutingModule } from "./catalog-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { SingleComponent } from './single/single.component';

import { SortByPipe } from '../catalog/sort-by.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    ListComponent,
    GridComponent,
    SingleComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbPopoverModule,
    NgxSliderModule,
    SimplebarAngularModule,
    CatalogRoutingModule,
    SharedModule,
    SwiperModule,
    FlatpickrModule.forRoot()
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class CatalogModule { }
