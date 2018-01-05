import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch: 'full'
  },
  {
    path:'service',
    component:ServiceComponent,
    pathMatch: 'full'
  },
  {
    path:'portfolio',
    component:PortfolioComponent,
    pathMatch: 'full'
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
