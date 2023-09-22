// triangle-rating.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-triangle-rating',
  templateUrl: './triangle-rating.component.html',
  styleUrls: ['./triangle-rating.component.css']
})
export class TriangleRatingComponent {
  currentRating = 0;
  isHovered = false;
  ratingOptions: number[] = [1, 2, 3, 4, 5]; // Customize the number of rating options
  hoverPercentage = 0; // Track the hover percentage

  onMouseMove(event: MouseEvent) {
    if (this.isHovered=true) {
      const target = event.target as HTMLElement;
      const ratingPercentage = (event.clientX - target.getBoundingClientRect().left) / target.offsetWidth;
      this.hoverPercentage = ratingPercentage;
    }
  }

  onMouseLeave() {
    if (!this.isHovered) {
      this.hoverPercentage = 0;
    }
  }

  onRatingClick() {
    this.isHovered = !this.isHovered;
    if (!this.isHovered) {
      this.currentRating = Math.ceil(this.hoverPercentage * this.ratingOptions.length);
      // Handle the rating submission or any other desired action
      console.log(`User rated ${this.currentRating} stars.`);
    }
  }

  getRatingOptionPosition(index: number): number {
    return (index / (this.ratingOptions.length - 1)) * 100;
  }

  getFillHeight(): number {
    return this.hoverPercentage * 100;
  }
}
