import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { PostContestComponent } from '../../containers/post-contest/post-contest.component';
import {SharedService} from '../../shared.service';

@Component({
    selector: 'first-step',
    templateUrl: './first-step.component.html',
    styleUrls: ['./first-step.component.scss'],
})

export class FirstStepComponent implements OnInit {
    user: SocialUser;
    selectedTitle;
    posts=[
        {"title":"Background Music","post":"Background music refers to various styles of music or soundscapes primarily intended to be passively listened to. It is not meant to be the main focus of an audience, but rather to supplement that which is meant to be focused upon. Music that is played at a low volume and is not the main focus of an audience is also referred to as background music. Traditional examples of background music include music played at various social gatherings and music played in certain retail venues. It is also common to employ background music in various electronic media including film, television, and Internet videos such as video blogs.","price":"70.00"},
        {"title":"Banner Ad Design","post":"Banner ads are the most ubiquitous form of marketing on the Internet. Since the days of Geocities and MySpace, banner ads have peppered the World Wide Web, advertising everything from free iPads to flash sales.","price":"20.00"},
        {"title":"Brochure Design","post":"Brochures are often printed using four-color process on thick, glossy paper to give an initial impression of quality. Businesses may print small quantities of brochures on a computer printer or on a digital printer, but offset printing turns out higher quantities for less cost.","price":"30.00"},
        {"title":"Business card design","post":"Business cards are cards bearing business information about a company or individual. They are shared during formal introductions as a convenience and a memory aid. A business card typically includes the giver's name, company or business affiliation (usually with a logo) and contact information such as street addresses, telephone number(s), fax number, e-mail addresses and website. Before the advent of electronic communication business cards might also include telex details. Now they may include social media addresses such as Facebook, LinkedIn and Twitter. Traditionally many cards were simple black text on white stock; today a professional business card will sometimes include one or more aspects of striking visual design","price":"40.00"},
        {"title":"Document Writing","post":"Technical documentation. I doubt it's something any of us would list as our favorite genre, either to write or to read. But it's one of those necessities we often curse then begrudgingly accept when we have to wade our way through it in order to solve a problem or when we have to write it in order to explain a technical product.","price":"50.00"},
        {"title":"Logo design","post":"In the days of hot metal typesetting, a logotype was a uniquely set and arranged typeface or colophon. At the level of mass communication and in common usage a company's logo is today often synonymous with its trademark or brand","price":""},
        {"title":"Logo Design","post":"A logo (abbreviation of logotype, from Greek: λόγος logos 'word' and τύπος typos 'imprint') is a graphic mark, emblem, or symbol commonly used by commercial enterprises, organizations and even individuals to aid and promote instant public recognition. Logos are either purely graphic (symbols/icons) or are composed of the name of the organization (a logotype or wordmark).","price":""},
        {"title":"Mobile App Design","post":"A mobile app is a computer program designed to run on smartphones, tablet computers and other mobile devices. Apps are usually available through application distribution platforms, which began appearing in 2008 and are typically operated by the owner of the mobile operating system, such as the Apple App Store, Google Play, Windows Phone Store, and BlackBerry App World. Some apps are free, while others must be bought. Usually, they are downloaded from the platform to a target device, such as an iPhone, BlackBerry, Android phone or Windows Phone, but sometimes they can be downloaded to laptops or desktop computers. For apps with a price, generally a percentage, 20-30%, goes to the distribution provider (such as iTunes), and the rest goes to the producer of the app. The same app can therefore cost the average Smartphone user a different price depending on whether they use iPhone, Android, or BlackBerry 10 devices.","price":""},
        {"title":"Packaging Design","post":"Lorem ipsum dolor inset amet Lorem ipsum dolor inset amet Lorem ipsum dolor inset amet Lorem ipsum dolor inset amet","price":""},
    ]

    constructor(private authService: AuthService,private router:Router,private postcomponent:PostContestComponent,private sharedservice:SharedService) { 
        localStorage.removeItem('postinfo');
    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
        });
    }

    
  checkLogin(title){
    if(!this.user){
      this.router.navigate(['/signup'])
    }else{
        this.selectedTitle=title;
        this.sharedservice.selectedTitle=title;
        console.log(title)
        localStorage.setItem('postinfo', '{"title": "' + title + '"}');
        this.postcomponent.step1visible=false;
        this.postcomponent.step3visible=false;
        this.postcomponent.step2visible=true;
        this.postcomponent.changeFont();
    }
  }
}
