import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    user: SocialUser;
    constructor(private authService: AuthService,private router:Router) { }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            if(!this.user){
                this.router.navigate(['/home'])
            }
        });
    }

}
