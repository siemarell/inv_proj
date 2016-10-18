import { NgModule} from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { ProjectsComponent } from './projects.component'
import {DashboardComponent} from "./dashboard.component";
import {ProjectDetailComponent} from "./project-detail.component";

const appRoutes: Routes = [
	{
		path: 'projects',
		component: ProjectsComponent,
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
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