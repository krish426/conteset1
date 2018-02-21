import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { ContestService } from '../../../_services/contest.service';
import { Router } from '@angular/router'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import * as moment from 'moment';

import { PostContestComponent } from '../../containers/post-contest/post-contest.component';
//declare var CryptoJS: any;
var CryptoJS = require("crypto-js");


@Component({
    selector: 'second-step',
    templateUrl: './second-step.component.html',
    styleUrls: ['./second-step.component.scss'],
    encapsulation: ViewEncapsulation.None,

})

export class SecondStepComponent implements OnInit {
    //variables fo r inputs
    newCategory
    newName
    description
    rules
    guide
    startdate
    enddate


    title
    content;
    name;
    model1;
    model;
    categories;
    awards = [] = [];
    contests
    awarddesc;

    uploader: S3Uploader;
    imagePath: string;
    config = new S3Config();

    user: SocialUser;

    closeResult: string;
    imageChangedEvent: any = '';
    croppedImage: any = '';

    //for alert
    alertType
    alertMessage
    visibleAlerts=false;

    constructor(private router: Router, private authService: AuthService, private modalService: NgbModal, private postcomponent: PostContestComponent, private sharedservice: SharedService, private http: Http, private contestservice: ContestService) {
        this.title = this.sharedservice.selectedTitle;
        this.config.bucket = 'contest-site-uploaded-images'
        this.config.accessKey = 'AKIAIUU3RAMZLXYAXNKA'
        this.config.secretAccessKey = 'k0/d3dqMPesfXUZU17epadE8RuODgLVkYiv9blcU'
        this.config.region = 'us-east-1'
        this.uploader = new S3Uploader();

        // Input your S3 Config
        this.uploader.init(http, this.config);
    }

    upload(event) {
        let self = this;
        let file = event.srcElement.files[0];
        console.log(file.name)
        this.uploader.upload(file).then((x) => {
            console.log(x)
            this.imagePath = x;
        });
        setTimeout(function () { self.imagePath = 'https://contest-site-uploaded-images.s3.amazonaws.com/' + file.name; }, 5000);

    }

    ngOnInit() {
        this.imagePath =
            this.title = this.sharedservice.selectedTitle;
        this.http.get("./assets/categories.json")
            .subscribe((data) => {
                console.log(data.json())
                this.categories = data.json()
            });
        this.http.get("./assets/contests.json")
            .subscribe((data) => {
                this.contests = data.json()
            });

        this.authService.authState.subscribe((user) => {
            this.user = user;
        });
    }

    loadStep3() {
        localStorage.setItem('postinfo', '{"name": "' + this.name + '","desc":"' + this.content + '"}');
        this.postcomponent.step1visible = false;
        this.postcomponent.step2visible = false;
        this.postcomponent.step3visible = true;
        this.postcomponent.changeFont();
    }


    addItem(item) {
        if (item == '') {

        } else {
            let data = {
                id: this.awards.length + 1,
                name: item
            }
            this.awards.push(data)
            this.awarddesc = ''
        }
    }


    saveContest() {

        if(!this.imagePath ||!this.startdate || !this.enddate ||!this.newName){
            this.alertType='warning'
            this.alertMessage='Please Fill Required Feilds'
            this.visibleAlerts=true;
            let self=this;
            setTimeout(function(){ 
                self.visibleAlerts=false;
             }, 2000);
        }else{
            let user = {
                id: this.user.id,
                name: this.user.name
            }
            let timeline=[]=[];
            let timelinedata={
                date:moment().format('MMMM Do YYYY, h:mm:ss a'),
                description:this.user.name+' '+'Created Contest'
            }
            timeline.push(timelinedata)
            let newContest = {
                image: this.imagePath,
                name: this.newName,
                user: user,
                startdate: this.startdate.year + '-' + this.startdate.month + '-' + this.startdate.day,
                enddate: this.enddate.year + '-' + this.enddate.month + '-' + this.enddate.day,
                category: this.newCategory,
                description: this.description,
                rules: this.rules,
                guide: this.guide,
                awards: this.awards,
                status:'Open',
                timeline:timeline
            }
            this.contestservice.addContest(newContest).subscribe(res=>{
                if(res._id){
                    this.alertType='success'
                    this.alertMessage='Contest Created Successed'
                    this.visibleAlerts=true;
                    let self=this;
                    setTimeout(function(){ 
                        self.visibleAlerts=false;
                     }, 2000);
                     this.resetForm();
                }else{
                    this.alertType='danger'
                    this.alertMessage='Cannot Create Contests at this Moment'
                    this.visibleAlerts=true;
                    let self=this;
                    setTimeout(function(){ 
                        self.visibleAlerts=false;
                     }, 2000);
                     this.resetForm();
                }
            })
            console.log('ere',newContest)
        }
        //this.router.navigate(['/browse-contest']);
    }

    open(content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    }

    fileChangeEvent(event: any, content): void {
        this.imageChangedEvent = event;
        this.open(content);
        this.upload(event)
    }
    imageCropped(image: string) {
        this.croppedImage = image;
    }

    updateImage() {
        this.croppedImage = '';
        this.imagePath = '';
    }

    resetAwards() {
        this.awards = [] = [];
        this.awarddesc = ''
    }

    resetForm(){
        this.updateImage();
        this.startdate='';
        this.enddate='';
        this.newName='';
        this.description='';
        this.rules='';
        this.guide='';
        this.awards=[]=[]
    }
}



export class S3Config {
    bucket: string;
    accessKey: string;
    secretAccessKey: string;
    region: string;
    folder: string;
}

export class S3Uploader {
    private config: S3Config;
    private http: Http;

    init(http: Http, config: S3Config) {
        this.http = http;
        this.config = config;
    }

    upload(file: any): Promise<any> {
        let date = this.generateTimestamp();
        let datetime = date + 'T000000Z';

        let credential = `${this.config.accessKey}/${date}/${this.config.region}/s3/aws4_request`;

        let policy = JSON.stringify({
            "expiration": (new Date(Date.now() + 100000)).toISOString(),
            "conditions": [
                { "bucket": this.config.bucket },
                ["starts-with", "$key", ""],
                { "acl": "public-read" },
                ["starts-with", "$Content-Type", ""],
                { "x-amz-credential": credential },
                { "x-amz-algorithm": "AWS4-HMAC-SHA256" },
                { "x-amz-date": datetime }
            ]
        });

        let policyBase64 = window.btoa(policy);
        let signatureKey = this.generateSignatureKey(this.config.secretAccessKey, date, this.config.region, "s3");
        let signature = CryptoJS.HmacSHA256(policyBase64, signatureKey).toString(CryptoJS.enc.Hex);
        let formData = new FormData();

        formData.append('acl', "public-read");
        formData.append('Content-Type', file.type);
        formData.append('X-Amz-Date', datetime);
        formData.append('X-Amz-Algorithm', "AWS4-HMAC-SHA256");
        formData.append('X-Amz-Credential', credential);
        formData.append('X-Amz-Signature', signature);
        formData.append('Policy', policyBase64);
        formData.append('key', file.name);
        formData.append('file', file);

        return new Promise((resolve, reject) => {
            this.http.post(`https://${this.config.bucket}.s3.amazonaws.com/`, formData).subscribe(x => {
                console.log(x);
                resolve(x.headers.get("Location"));
            }, x => {
                console.error(x);
                reject();
            });
        });
    }

    generateSignatureKey(key, dateStamp, regionName, serviceName) {
        let kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + key);
        let kRegion = CryptoJS.HmacSHA256(regionName, kDate);
        let kService = CryptoJS.HmacSHA256(serviceName, kRegion);
        let kSigning = CryptoJS.HmacSHA256("aws4_request", kService);

        return kSigning;
    }

    generateTimestamp() {
        let date = new Date();
        let year = date.getFullYear();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return year + month + day;
    }





}
