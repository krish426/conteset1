import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HowItWorksComponent } from './containers/how-it-works/how-it-work.component';
import { WorkPageComponent } from './components/works-page/works-page.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [HowItWorksComponent,WorkPageComponent],
    exports: [HowItWorksComponent],
    providers: []
})
export class HowItWorkModule { }
