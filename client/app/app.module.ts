import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent} from './app.component';
import {ProjectDetailComponent} from './project-detail.component'
import {ProjectsComponent} from "./projects.component";

import { ProjectsService } from "./projects.service";
import { OlMap } from "./map.component"
import { PageNotFoundComponent } from "./page-not-found.component";
import { HttpModule } from "@angular/http";
import { GanttComponent } from "./gantt.component";
import { HChartComponent } from './hchart.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import {CarouselDemoComponent} from "./carousel-img.component";
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
	    HttpModule,
	    ChartModule,
	    AppRoutingModule,
	    CarouselModule,
	    ModalModule
    ],
    declarations: [
        AppComponent,
        ProjectsComponent,
        ProjectDetailComponent,
	    OlMap,
	    GanttComponent,
	    HChartComponent,
	    CarouselDemoComponent,
	    PageNotFoundComponent
    ],
	providers: [ProjectsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
