import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleRatingComponent } from './triangle-rating.component';

describe('TriangleRatingComponent', () => {
  let component: TriangleRatingComponent;
  let fixture: ComponentFixture<TriangleRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriangleRatingComponent]
    });
    fixture = TestBed.createComponent(TriangleRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
