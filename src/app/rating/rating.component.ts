import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  currentRating = 0;
  isHovered = false;

  onMouseMove(event: MouseEvent) {
    if (this.isHovered = true) {
      const target = event.target as HTMLElement; // Cast event.target to HTMLElement
      const ratingPercentage = (event.clientX - target.offsetLeft) / target.offsetWidth;
      this.updateRectangleColorHover(ratingPercentage * 100);
    }
  }

  onMouseLeave() {
    if (!this.isHovered) {
      this.updateRectangleColorSelected((this.currentRating / 5) * 100);
    }
  }

  onRatingClick() {
    // Toggle isHovered on click
    this.isHovered = !this.isHovered;
    if (!this.isHovered) {
      // Update the current rating only when isHovered is false (i.e., after clicking)
      this.currentRating = Math.ceil((this.currentRating / 5) * 5);
      this.updateRectangleColorSelected((this.currentRating / 5) * 100);
    }
  }

  private updateRectangleColorHover(percentage: number) {
    const rectangle = document.querySelector('.rectangle') as HTMLElement;
    rectangle.style.backgroundColor = `red`; // Red during hover
    rectangle.style.borderColor = `black`;
    rectangle.style.borderLeftWidth = `0px`
    rectangle.style.borderTopWidth = `0px`
    rectangle.style.borderRightWidth = `1px`
    rectangle.style.borderBottomWidth = `1px`

    rectangle.style.borderStyle = `solid`;

    rectangle.style.width = `${percentage}%`;
  }

  private updateRectangleColorSelected(percentage: number) {
    const rectangle = document.querySelector('.rectangle') as HTMLElement;
    rectangle.style.backgroundColor = `yellow`; // Yellow after selection
    rectangle.style.borderColor = `black`; // Black border
    rectangle.style.borderWidth = `1px`; // Border width
    rectangle.style.width = `${percentage}%`;
  }
}
