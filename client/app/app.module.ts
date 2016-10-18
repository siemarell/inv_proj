import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import {DataListModule} from 'primeng/primeng'

import { AppComponent} from './app.component';
import {ProjectDetailComponent} from './project-detail.component'
import {ProjectsComponent} from "./projects.component";
import {DashboardComponent} from "./dashboard.component";
import {ProjectsService} from "./projects.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
	    DataListModule,
	    AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ProjectsComponent,
        ProjectDetailComponent,
	    DashboardComponent
    ],
	providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
