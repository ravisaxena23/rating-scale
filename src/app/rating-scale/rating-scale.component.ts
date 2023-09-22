import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-scale',
  templateUrl: './rating-scale.component.html',
  styleUrls: ['./rating-scale.component.css']
})
export class RatingScaleComponent {
  ratings = [1, 2, 3, 4, 5];
  selectedRating: number = 0;

  onRatingSelected(rating: number) {
    this.selectedRating = rating;
  }
}
