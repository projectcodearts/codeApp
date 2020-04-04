import { Component, OnInit } from '@angular/core';
import { BannerService } from '../service/banner.service';

@Component({
  selector: 'codearts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners:any;
  interval: any;

  constructor(private service:BannerService) {

  }

 ngOnInit() {
  this.refreshData();
  this.interval = setInterval(() => {
    this.refreshData();
}, 10000);

 }

 refreshData(){
  this.service.getData().subscribe(data=>this.banners=data);
}


}
