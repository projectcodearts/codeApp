import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../get-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private Mservice : GetServiceService) { }
  servicetitle: string = "our services";
  havesvg:boolean = true;

  services: any;

  ngOnInit(): void {
    this.services=this.Mservice.getservices();
  }

}
