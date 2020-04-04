import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services/services-details/services-details.component';
import { LatestProjectsComponent } from './latest-projects/latest-projects.component';
import { OurReviewsComponent } from './our-reviews/our-reviews.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GetServiceService } from './get-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    LatestProjectsComponent,
    OurReviewsComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
