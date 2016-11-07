import { NgModule} from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { ProjectsComponent } from './projects.component'

import {ProjectDetailComponent} from "./project-detail.component";

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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule{}