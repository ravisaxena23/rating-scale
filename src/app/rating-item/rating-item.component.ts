import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-item',
  templateUrl: './rating-item.component.html',
  styleUrls: ['./rating-item.component.css']
})
export class RatingItemComponent {
  @Input() rating: number=0;
  @Input() selected: boolean=false;
  @Output() ratingSelected = new EventEmitter<number>();

  onHover() {
    // Add hover effect here
  }

  onLeave() {
    // Remove hover effect here
  }

  selectRating() {
    this.ratingSelected.emit(this.rating);
  }
}
