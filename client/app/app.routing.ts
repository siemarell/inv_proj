import { ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule} from '@angular/router'

import { HeroesComponent } from './projects.component'
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./project-detail.component";

const appRoutes: Routes = [
	{
		path: 'projects',
		component: HeroesComponent,
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
		component: HeroDetailComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);