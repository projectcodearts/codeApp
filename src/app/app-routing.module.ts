import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LatestProjectsComponent } from './latest-projects/latest-projects.component';
import { OurReviewsComponent } from './our-reviews/our-reviews.component';
import { ServicesDetailsComponent } from './services/services-details/services-details.component';


const routes: Routes = [ 
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},  
  {path: 'services', component: ServicesComponent,},
  {path: 'projects', component: LatestProjectsComponent},
  {path: 'reviews', component: OurReviewsComponent},  
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
