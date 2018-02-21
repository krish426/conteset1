import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {ContestService } from '../../../_services/contest.service';
import _ from "lodash";

@Component({
    selector: 'browse-contest',
    templateUrl: './browse-contest.component.html',
    styleUrls: ['./browse-contest.component.scss']
})

export class BrowseContestComponent implements OnInit {
  user: SocialUser;
  contests;
  allContests;
  p: number = 1;
  loading=true;


  //contestTypes;
  openContests=[]=[];
  inprocessContests=[]=[];
  cloasedContests=[]=[];

  constructor(private authService: AuthService,private router:Router,private http:Http,private contestservice:ContestService) { }

  ngOnInit() {

    this.contestservice.getContests().subscribe(res=>{
      this.loading=false;
      if(!res){

      }else{
        this.contests=res;
        this.allContests=res;
        console.log(this.contests)
        this.chategorizeContests(res)
      }
      
    })


    this.authService.authState.subscribe((user) => {
      this.user = user;

  });
  }

  checkLogin(id){
    if(!this.user){
      this.router.navigate(['/signup'])
    }else{
      this.router.navigate(['/browse-contest/'+id])
    }
  }


  
  chategorizeContests(contests){
    this.openContests=_.filter(contests, { 'status': 'Open' });
    this.inprocessContests=_.filter(contests, { 'status': 'Inprocess' });
    this.cloasedContests=_.filter(contests, { 'status': 'Cloased' });
  }

  changeContestMenu(type){
    if(type=='All Categories'){
      this.contests=this.allContests;
    }else{
      this.contests=_.filter(this.allContests, { 'category': type });
    }
    this.openContests=_.filter(this.contests, { 'status': 'Open' });
    this.inprocessContests=_.filter(this.contests, { 'status': 'Inprocess' });
    this.cloasedContests=_.filter(this.contests, { 'status': 'Cloased' });
  }

}
