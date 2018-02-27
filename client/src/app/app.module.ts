import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SocialLoginModule } from 'angularx-social-login'; 
import { HttpModule } from '@angular/http';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionComponent } from './terms-and-conditions/terms-and-condition';

import { HomeModule } from './home/home.module';
import { HowItWorkModule } from './how-it-works/work.module'
import { PostContestModule } from './post-contests/post-contest.module';

//for browse categories
import { BrowseContestComponent } from './browse-contests/container/browse-contests/browse-contest.component';
import {ViewContestComponent} from './browse-contests/container/view-contests/view-contest.component';
import { BrowseCategoriesComponent } from './browse-contests/components/browse-categories/browse-categories.component';
import { CKEditorModule } from 'ng2-ckeditor';

//services

import {ContestService} from './_services/contest.service';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('124660258362665')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    BrowseContestComponent,
    BrowseCategoriesComponent,
    ContactUsComponent,
    TermsConditionComponent,
    ViewContestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    SocialLoginModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    HowItWorkModule,
    PostContestModule,
    NgxPaginationModule,
    CKEditorModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ContestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
