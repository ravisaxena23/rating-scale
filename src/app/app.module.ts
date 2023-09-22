import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingScaleComponent } from './rating-scale/rating-scale.component';
import { TriangularRatingComponent } from './triangular-rating/triangular-rating.component';
import { RatingItemComponent } from './rating-item/rating-item.component';
import { RatingComponent } from './rating/rating.component';
import { TriangleRatingComponent } from './triangle-rating/triangle-rating.component';
import { TriangleRatingDirective } from './triangle-rating.directive';

@NgModule({
  declarations: [
    AppComponent,
    RatingScaleComponent,
    TriangularRatingComponent,
    RatingItemComponent,
    RatingComponent,
    TriangleRatingComponent,
    TriangleRatingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
