import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangular-rating',
  templateUrl: './triangular-rating.component.html',
  styleUrls: ['./triangular-rating.component.css']
})
export class TriangularRatingComponent implements OnInit {
  ratings: number[] = [1, 2, 3, 4, 5];
  selectedRating: number  = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onHover(): void {
    // Change the color or add hover effect here
  }

  selectRating(rating: number): void {
    this.selectedRating = rating;
  }
}
