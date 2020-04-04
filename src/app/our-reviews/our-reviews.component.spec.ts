import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurReviewsComponent } from './our-reviews.component';

describe('OurReviewsComponent', () => {
  let component: OurReviewsComponent;
  let fixture: ComponentFixture<OurReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
