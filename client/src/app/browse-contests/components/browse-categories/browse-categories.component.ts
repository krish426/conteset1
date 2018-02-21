import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContestService } from '../../../_services/contest.service';
import _ from "lodash";
import { BrowseContestComponent } from '../../container/browse-contests/browse-contest.component';

@Component({
    selector: 'browse-categories',
    templateUrl: './browse-categories.component.html',
    styleUrls: ['./browse-categories.component.scss']
})

export class BrowseCategoriesComponent implements OnInit {
    chategories = [] = [];
    contests=[]=[]

    constructor(private http: Http, private contestservice: ContestService,private browseContestComponent:BrowseContestComponent) { }

    ngOnInit() {
        this.http.get("./assets/categories.json")
            .subscribe((data) => {
                //console.log(data.json())
                this.arrageContests(data.json())
                //this.chategories = data.json()
            });
    }

    arrageContests(chategories) {
        this.contestservice.getContests().subscribe(res => {
            console.log(res)
            this.contests=res;
            for (let a = 0; a < chategories.length; a++) {
                chategories[a].count = (_.filter(res, { 'category': chategories[a].name })).length;
            }
            console.log(chategories, 'post')
            this.chategories = chategories;
        })
    }

    filterContests(name){
        console.log(name)
        this.browseContestComponent.changeContestMenu(name);
    }
}