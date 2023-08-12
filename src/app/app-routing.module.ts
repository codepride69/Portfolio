import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
