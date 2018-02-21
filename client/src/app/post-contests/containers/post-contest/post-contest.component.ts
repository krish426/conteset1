import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './post-contest.component.html',
    styleUrls: ['./post-contest.component.scss']
})

export class PostContestComponent implements OnInit {

    step1visible=true;
    step2visible=false;
    step3visible=false;

    step1font="39px"
    step2font= "1.825em"
    step3font ="1.825em";
    user;

    constructor(private authService: AuthService,private router:Router) { }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
      
        });
        if(this.step1visible){
            this.step1font= "39px";          
        }
    }

    changeFont(){
        if(this.step1visible){
            this.step1font="39px"
            this.step2font= "1.825em"
            this.step3font ="1.825em"
        }else if(this.step2visible){
            this.step1font="1.825em"
            this.step2font= "39px"
            this.step3font ="1.825em"
        }else{
            this.step1font="1.825em"
            this.step2font= "1.825em"
            this.step3font ="39px"
        }

    }

    navigatetologin(){
        this.router.navigate(['/signup'])
    }
}
