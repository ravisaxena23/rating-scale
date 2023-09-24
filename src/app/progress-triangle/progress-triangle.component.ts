import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-triangle',
  templateUrl: './progress-triangle.component.html',
  styleUrls: ['./progress-triangle.component.css']
})
export class ProgressTriangleComponent {
  progressPercentage: number = 0;

  onMouseMove(event: MouseEvent) {
    const containerHeight = (event.currentTarget as HTMLElement).offsetHeight;
    const mouseY = containerHeight - event.clientY;
    this.progressPercentage = (mouseY / containerHeight) * 100;
  }

  onClick(event: MouseEvent) {
    this.onMouseMove(event);
  }
}
