import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { Slider2Component } from './components/slider2/slider2.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { PromoComponent } from './pages/promo/promo.component';
import { StartComponent } from './pages/start/start.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


const appRoutes: Routes = [
  { path: 'HomeComponent', component: HomeComponent },
  { path: 'AboutComponent', component: AboutComponent },
  { path: 'BlogComponent', component: BlogComponent },
  { path: 'PortfolioComponent', component: PortfolioComponent },
  { path: 'PromoComponent', component: PromoComponent },
  { path: 'ServicesComponent', component: ServicesComponent },
  { path: 'StartComponent', component: StartComponent },
  { path: 'TestimonialsComponent', component: TestimonialsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    Slider2Component,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    PromoComponent,
    StartComponent,
    TestimonialsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
