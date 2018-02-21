import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import {Router} from '@angular/router'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    user: SocialUser;
    constructor(private authService: AuthService,private router:Router) {

    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            if(this.user){
                this.router.navigate(['/home']);
                localStorage.setItem('info', '{"id": "' + this.user.id + '"}');
            }
        });
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
}
