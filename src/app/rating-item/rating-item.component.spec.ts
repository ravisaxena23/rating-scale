import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingItemComponent } from './rating-item.component';

describe('RatingItemComponent', () => {
  let component: RatingItemComponent;
  let fixture: ComponentFixture<RatingItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingItemComponent]
    });
    fixture = TestBed.createComponent(RatingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
