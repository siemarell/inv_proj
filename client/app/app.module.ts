import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent} from './app.component';
import {ProjectDetailComponent} from './project-detail.component'
import {ProjectsComponent} from "./projects.component";
import {ProjectDescriptionComponent} from "./project-description.component";

import {ProjectsService} from "./projects.service";
import { OlMap } from "./map.component"
import {PageNotFoundComponent} from "./page-not-found.component";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
	    HttpModule,
	    AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ProjectsComponent,
        ProjectDetailComponent,
        ProjectDescriptionComponent,
	    OlMap,
	    PageNotFoundComponent
    ],
	providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
