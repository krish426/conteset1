import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import {SharedService} from './shared.service';
import { ImageCropperModule } from 'ngx-image-cropper';

import { PostContestComponent } from './containers/post-contest/post-contest.component';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThirdStepComponent } from './components/third-step/third-step.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule, 
        CKEditorModule,
        ImageCropperModule
    ],
    declarations: [PostContestComponent,FirstStepComponent,SecondStepComponent,ThirdStepComponent],
    exports: [PostContestComponent],
    providers: [SharedService]
})
export class PostContestModule { }
