import { NgModule} from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { ProjectsComponent } from './projects.component'
import {ProjectDetailComponent} from "./project-detail.component";
import {PageNotFoundComponent} from "./page-not-found.component";
import { GanttComponent } from  "./gantt.component";
import { HChartComponent} from './hchart.component';
import {ImageGallery} from "./img-gallery.component";

const appRoutes: Routes = [
	{
		path: 'projects',
		component: ProjectsComponent
	},
	{
		path: '',
		component: ProjectsComponent
	},
	{
		path: 'carousel',
		component: ImageGallery,
	},
	{
		path: 'gantt',
		component: GanttComponent,
	},
	{
		path: 'chart',
		component: HChartComponent,
	},
	{
		path: 'detail/:id',
		component: ProjectDetailComponent
	},
	{
		path: '404',
		component: PageNotFoundComponent
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule{}