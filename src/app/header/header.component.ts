import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'codearts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigation: any = [
    {
      "url":"home",
      "pagename":"home"
    },
    {
      "url":"about",
      "pagename":"about us"
    },
    {
      "url":"services",
      "pagename":"our services",
      /*"submenu":[
        {
          "url":"services/plugin-customization",
          "pagename":"plugin customization"
        },
        {
          "url":"services/web-development",
          "pagename":"web development"
        },
        {
          "url":"services/wesite-design",
          "pagename":"website design"
        },
        {
          "url":"services/ui-ux-design",
          "pagename":"UI/UX design"
        },
      ]*/
    },
    {
      "url":"projects",
      "pagename":"latest projects"
    },
    {
      "url":"reviews",
      "pagename":"our reviews"
    },
    {
      "url":"contact",
      "pagename":"contact us"
    },
    
  ];

  constructor(public router: Router) { }  

  ngOnInit(): void {
    
  }

}
