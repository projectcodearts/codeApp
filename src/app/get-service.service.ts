import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  getservices(){
    return [
      {
        "iconname":"plugin",
        "title":"plugin development",
        "url": "services/plugin-customization"
      },
      {
        "iconname":"webdev",
        "title":"web development",
        "url": "services/web-development"
      },
      {
        "iconname":"webdesign",
        "title":"website design",
        "url": "services/website-design"
      },
      {
        "iconname":"uiuxdev",
        "title":"UI / UX design",
        "url": "services/ui-ux-design"
      },      
    ];
  }

  constructor() { }
}
