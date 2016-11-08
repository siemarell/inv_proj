import { NgModule} from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { ProjectsComponent } from './projects.component'
import {ProjectDetailComponent} from "./project-detail.component";
import {PageNotFoundComponent} from "./page-not-found.component";

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