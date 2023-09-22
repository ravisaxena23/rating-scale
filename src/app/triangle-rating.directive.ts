import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTriangleRating]'
})
export class TriangleRatingDirective implements OnInit {
  @Input() parts: number=0; // Input to specify the number of parts
  private triangle!: HTMLDivElement; // Initialize the property

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.triangle = this.renderer.createElement('div');
    this.renderer.addClass(this.triangle, 'triangle');

    const partWidth = 100 / this.parts;
    
    for (let i = 0; i < this.parts; i++) {
      const part = this.renderer.createElement('div');
      this.renderer.addClass(part, 'triangle-part');
      this.renderer.setStyle(part, 'width', `${partWidth}%`);
      this.renderer.appendChild(this.triangle, part);
    }

    this.renderer.appendChild(this.el.nativeElement, this.triangle);
  }
}
