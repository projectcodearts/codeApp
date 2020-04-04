import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'codearts-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  fnavigation: any = [
    {
      "url":"home",
      "image":"i1"
    },
    {
      "url":"about",
      "image":"i2"
    },
    {
      "url":"services",
      "image":"i3"
    },
    {
      "url":"projects",
      "image":"i4"
    },
    {
      "url":"reviews",
      "image":"i5"
    },
    {
      "url":"contact",
      "image":"i6"
    },
    
  ];

  ngOnInit(): void {
  }

}
