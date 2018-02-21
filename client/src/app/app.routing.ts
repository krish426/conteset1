import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BrowseContestComponent } from './browse-contests/container/browse-contests/browse-contest.component';
import { HowItWorksComponent } from './how-it-works/containers/how-it-works/how-it-work.component';
import { PostContestComponent } from './post-contests/containers/post-contest/post-contest.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {TermsConditionComponent} from './terms-and-conditions/terms-and-condition';
import {ViewContestComponent} from './browse-contests/container/view-contests/view-contest.component';


import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'browse-contest', component: BrowseContestComponent },
  { path: 'browse-contest/:id', component: ViewContestComponent },
  { path: 'how-works', component: HowItWorksComponent },
  { path: 'post-contest', component: PostContestComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'terms', component: TermsConditionComponent },

  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
