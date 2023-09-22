import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangularRatingComponent } from './triangular-rating.component';

describe('TriangularRatingComponent', () => {
  let component: TriangularRatingComponent;
  let fixture: ComponentFixture<TriangularRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriangularRatingComponent]
    });
    fixture = TestBed.createComponent(TriangularRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
