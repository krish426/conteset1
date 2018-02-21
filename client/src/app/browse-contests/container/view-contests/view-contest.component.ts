import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ContestService } from '../../../_services/contest.service';
import * as moment from 'moment';
import _ from "lodash";
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
var CryptoJS = require("crypto-js");

@Component({
    selector: 'view-contest',
    templateUrl: './view-contest.component.html',
    styleUrls: ['./view-contest.component.scss']
})

export class ViewContestComponent implements OnInit {
    user: SocialUser;
    id: number;
    private sub: any;
    selectedContest;
    previousData;
    comment;
    isFollow = false;
    userid;
    contestId;
    description;
    closeResult: string;
    contestStatus
    private manageModel: NgbModalRef;

    alertType
    alertMessage
    visibleAlerts = false;
    winner = 'Select One'


    uploader: S3Uploader;
    imagePath: string;
    config = new S3Config();

    //edit data
    discriptionEditable = false;
    rulesEditable= false;
    helpGuideEditble=false;
    titleEditable=false;
    awardsEditable=false
    constructor(private authService: AuthService, private modalService: NgbModal, private router: Router, private http: Http, private route: ActivatedRoute, private contestservice: ContestService) {
        this.config.bucket = 'contest-site-uploaded-images'
        this.config.accessKey = 'AKIAIUU3RAMZLXYAXNKA'
        this.config.secretAccessKey = 'k0/d3dqMPesfXUZU17epadE8RuODgLVkYiv9blcU'
        this.config.region = 'us-east-1'
        this.uploader = new S3Uploader();

        // Input your S3 Config
        this.uploader.init(http, this.config);
    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
        });

        this.id = this.route.snapshot.params['id'];
        let self = this;
        this.contestservice.getContestsById(this.id).subscribe(res => {
            console.log(res)
            this.previousData = res;
            this.selectedContest = res;
            this.contestStatus = res.status
            let followers = res.followers;
            if (!followers) {
                followers = [] = [];
            }
            // if(!res.uploads){
            //     this.selectedContest.uploads=[]=[];
            // }
            console.log(followers);
            this.contestId = res._id;

            var parser = new DOMParser()
            this.description = parser.parseFromString(this.selectedContest.description, "text/html");
            console.log(this.description)

            if (JSON.parse(localStorage.getItem('info'))) {
                let userid = (JSON.parse(localStorage.getItem('info'))).id;
                for (let a = 0; a < followers.length; a++) {
                    if (userid == followers[a].id) {
                        this.isFollow = true;
                        break;
                    }

                }
                console.log(this.isFollow)
            }

        })



    }


    addComment() {
        if (!this.selectedContest.comment) {
            this.selectedContest.comment = [] = [];
        }
        if (!this.previousData.comment) {
            this.previousData.comment = [] = [];
        }
        if (this.comment) {
            let newComment = {
                msg: this.comment,
                image: this.user.photoUrl,
                name: this.user.name,
                time: moment().format('MMM Do YY, h:mm a')
            }

            this.previousData.comment.push(newComment)
            console.log(this.previousData)
            this.contestservice.updateContest(this.previousData).subscribe(res => {
                console.log(res)
                //this.selectedContest.comment.push(newComment)
            })

        }
    }

    followContest() {
        //update time line
        if (!this.selectedContest.timeline) {
            this.selectedContest.timeline = [] = [];
        }
        if (!this.previousData.timeline) {
            this.previousData.timeline = [] = [];
        }
        let timelinedata = {
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            description: this.user.name + ' ' + 'Join With Contest'
        }
        this.previousData.timeline.push(timelinedata);
        //update participate
        if (!this.selectedContest.followers) {
            this.selectedContest.followers = [] = [];
        }
        if (!this.previousData.followers) {
            this.previousData.followers = [] = [];
        }
        this.previousData._id = this.contestId;
        let follow = {
            name: this.user.name,
            id: this.user.id,
            email: this.user.email,
            image: this.user.photoUrl
        }
        this.previousData.followers.push(follow);
        this.contestservice.updateContest(this.previousData).subscribe(res => {
            console.log(res)
            if (res) {
                this.isFollow = true;
            }
        })
    }

    unFollowContest() {
        //update time line
        if (!this.selectedContest.timeline) {
            this.selectedContest.timeline = [] = [];
        }
        if (!this.previousData.timeline) {
            this.previousData.timeline = [] = [];
        }
        let timelinedata = {
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            description: this.user.name + ' ' + 'Left From Contest'
        }
        this.previousData.timeline.push(timelinedata);

        //update participate
        this.previousData._id = this.contestId;
        console.log(this.contestId);
        let self = this;
        _.remove(this.previousData.followers, function (n) {
            return n.id == self.user.id;
        });
        _.remove(this.selectedContest.followers, function (n) {
            return n.id == self.user.id;
        });
        console.log('xxxxxxxxxxxxxxx', this.previousData)
        this.contestservice.updateContest(this.previousData).subscribe(res => {
            if (res) {
                this.isFollow = false
            }
        })

    }

    reportContest(report) {
        this.modalService.open(report).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    manageContest(model) {
        this.manageModel = this.modalService.open(model, { windowClass: 'dark-modal' });
        this.manageModel.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    saveManageData() {
        if (this.winner == 'Select One') {
            //not set winner
            if (!this.selectedContest.timeline) {
                this.selectedContest.timeline = [] = [];
            }
            if (!this.previousData.timeline) {
                this.previousData.timeline = [] = [];
            }
            let timelinedata = {
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                description: this.user.name + ' ' + 'changed contest status as ' + this.contestStatus
            }
            this.previousData.timeline.push(timelinedata);
            this.previousData.status = this.contestStatus;
            this.previousData._id = this.contestId;

            this.contestservice.updateContest(this.previousData).subscribe(res => {
                console.log(res)
                if (res.ok == 1) {
                    this.manageModel.close();
                    this.selectedContest.status = this.contestStatus;
                }

            })
        } else {
            //set winner
            if (!this.selectedContest.timeline) {
                this.selectedContest.timeline = [] = [];
            }
            if (!this.previousData.timeline) {
                this.previousData.timeline = [] = [];
            }
            let timelinedata = {
                date: moment().format('MMMM Do YYYY, h:mm:ss a'),
                description: this.user.name + ' ' + 'set winner as ' + this.winner
            }
            this.previousData.timeline.push(timelinedata);
            this.previousData.status = this.contestStatus;
            this.previousData.winner = this.winner;
            this.previousData._id = this.contestId;

            this.contestservice.updateContest(this.previousData).subscribe(res => {
                console.log(res)
                if (res.ok == 1) {
                    this.manageModel.close();
                    this.selectedContest.status = this.contestStatus;
                }

            })

        }
    }

    changeWinner() {
        if (!(this.winner == 'Select One')) {
            this.contestStatus = 'Cloased'
        }
    }

    uploadedFile;
    myfile;
    upload(event) {
        this.uploadedFile = event;
    }

    uploadPost() {
        let event = this.uploadedFile
        let self = this;
        let file = event.srcElement.files[0];
        console.log(file.name)
        this.uploader.upload(file).then((x) => {
            console.log(x)
            this.imagePath = x;
        });

        setTimeout(function () {
            self.imagePath = 'https://contest-site-uploaded-images.s3.amazonaws.com/' + file.name;
            console.log(self.imagePath)
            self.saveUploadedFile(self.imagePath);
        }, 5000);

    }

    saveUploadedFile(filepath) {
        //save upload file path
        if (!this.selectedContest.uploads) {
            this.selectedContest.uploads = [] = [];
        }
        if (!this.previousData.uploads) {
            this.previousData.uploads = [] = [];
        }
        let user = {
            name: this.user.name,
            id: this.user.id,
        }
        let uploaddata = {
            path: filepath,
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            user: user
        }
        this.previousData.uploads.push(uploaddata);

        //update timeline
        if (!this.selectedContest.timeline) {
            this.selectedContest.timeline = [] = [];
        }
        if (!this.previousData.timeline) {
            this.previousData.timeline = [] = [];
        }
        let timelinedata = {
            date: moment().format('MMMM Do YYYY, h:mm:ss a'),
            description: this.user.name + ' ' + 'post on contest'
        }
        this.previousData.timeline.push(timelinedata);
        this.previousData._id = this.contestId;
        this.contestservice.updateContest(this.previousData).subscribe(res => {
            console.log(res)
            if (res.ok == 1) {
                this.uploadedFile = '';
                this.myfile = '';
                this.alertType = 'success'
                this.visibleAlerts = true;
                let self = this;
                this.alertMessage = 'Uploaded File Suessfully';
                setTimeout(function () {
                    self.visibleAlerts = false;
                }, 3000);
                //console.log('kdshjshdkjghdskjhgjdskhgjkdsh')
            }

        })
    }

    changeDescriptionEditable() {
        this.discriptionEditable = !this.discriptionEditable;
    }

    updateDiscription(value) {
        this.previousData.description = value;
        this.previousData._id = this.contestId;

        this.contestservice.updateContest(this.previousData).subscribe(res => {
            console.log(res)
            if (res.ok == 1) {
                this.selectedContest.description = value
                this.discriptionEditable=false;
            }

        })
    }

    changeRulesEditable(){
        this.rulesEditable=!this.rulesEditable;
    }

    updateRules(value) {
        this.previousData.rules = value;
        this.previousData._id = this.contestId;

        this.contestservice.updateContest(this.previousData).subscribe(res => {
            console.log(res)
            if (res.ok == 1) {
                this.selectedContest.rules = value
                this.rulesEditable=false;
            }

        })
    }

    changeHelpGuideEditable(){
        this.helpGuideEditble=!this.helpGuideEditble;
    }

    updateHelpGuide(value) {
        this.previousData.guide = value;
        this.previousData._id = this.contestId;

        this.contestservice.updateContest(this.previousData).subscribe(res => {
            console.log(res)
            if (res.ok == 1) {
                this.selectedContest.guide = value
                this.helpGuideEditble=false;
            }

        })
    }

    editTitle(){
        this.titleEditable=!this.titleEditable
    }

    updateTitle(value) {
        this.previousData.name = value;
        this.previousData._id = this.contestId;

        this.contestservice.updateContest(this.previousData).subscribe(res => {
            console.log(res)
            if (res.ok == 1) {
                this.selectedContest.name = value
                this.titleEditable=false;
            }

        })
    }

    editAwards(){
        this.awardsEditable=!this.awardsEditable;
    }

    updateAwards(value) {
        this.previousData.awards = value;
        this.previousData._id = this.contestId;

        this.contestservice.updateContest(this.previousData).subscribe(res => {
            console.log(res)
            if (res.ok == 1) {
                this.selectedContest.awards = value
                this.awardsEditable=false;
            }

        })
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

