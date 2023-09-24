import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTriangleComponent } from './progress-triangle.component';

describe('ProgressTriangleComponent', () => {
  let component: ProgressTriangleComponent;
  let fixture: ComponentFixture<ProgressTriangleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressTriangleComponent]
    });
    fixture = TestBed.createComponent(ProgressTriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
