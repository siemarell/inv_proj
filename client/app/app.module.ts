import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms'
 
import { AppComponent} from './app.component';
import {HeroDetailComponent} from './project-detail.component'
import {HeroesComponent} from "./projects.component";
import { routing } from './app.routing'
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./project.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
	    routing
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
	    DashboardComponent
    ],
	providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
