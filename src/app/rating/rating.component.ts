import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  currentRating = 0;
  isHovered = false;
  threeScales = {
    '33.33': 1,
    '66.33': 2,
    '99.33': 3,
  }
  fiveScales = {
    '20':1,
    '40':2,
    '60':3,
    '80':4,
    '100':5
    
  };
  sevenScales = {
    '14.28':1,
    '28.57':2,
    '42.8':3,
    '57.1':4,
    '71.4':5,
    '85.71':6,
    '100':7
  }
  ratingScales = 5;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const outerRectangle = document.querySelector('.outer-rectangle') as HTMLElement;
    outerRectangle.style.width = `300px`
    outerRectangle.style.backgroundColor = 'black'
     
  }

  onMouseMove(event: MouseEvent) {
    if (this.isHovered = true) {
      const target = event.target as HTMLElement; // Cast event.target to HTMLElement
      const ratingPercentage = (event.clientX - target.offsetLeft) / target.offsetWidth;
      this.updateRectangleColorHover(ratingPercentage * 100);
      this.currentRating = ratingPercentage * 100
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
    // rectangle.style.borderColor = `black`;
    rectangle.style.borderLeftWidth = `0px`
    rectangle.style.borderTopWidth = `0px`
    rectangle.style.borderRightWidth = `1px`
    rectangle.style.borderBottomWidth = `1px`
    if(percentage > 100) return;
    rectangle.style.width = `${percentage}%`;
  }

  private updateRectangleColorSelected(percentage: number) {
    const rectangle = document.querySelector('.rectangle') as HTMLElement;
    const hr = document.querySelector('.triangle-linear-border') as HTMLElement;
    rectangle.style.backgroundColor = `yellow`; // Yellow after selection
    rectangle.style.borderColor = `black`; // Black border
    rectangle.style.borderWidth = `1px`; // Border width
    rectangle.style.width = `${percentage}%`;
  }

  onClick(rating:number){
    console.log(rating)
    let widthConfig = {};
    switch (this.ratingScales) {
      case 3:
        widthConfig = this.threeScales
        break;
      case 5:
      widthConfig = this.fiveScales;
      break;
      case 7:
        widthConfig = this.sevenScales;
        break;
      default:
        widthConfig = this.threeScales;
        break;
    }
    console.log((this.currentRating / 5) * 100);
    
    for(let key in widthConfig) {
      console.log(key)
      // @ts-ignore
      if(widthConfig[key] == rating) {
        const rectangle = document.querySelector('.rectangle') as HTMLElement;
        rectangle.style.width = `${key}%`;
        // @ts-ignore
        console.log(key, widthConfig[key])
      }
    }
  }
}
