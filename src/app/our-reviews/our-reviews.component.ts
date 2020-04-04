import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-reviews',
  templateUrl: './our-reviews.component.html',
  styleUrls: ['./our-reviews.component.scss']
})
export class OurReviewsComponent implements OnInit {

  constructor() { }
  reviewstitle: string = "our reviews";
  ngOnInit(): void {
  }

}
