import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProjectService} from "./project.service";
import {Project} from "./project";
@Component({
	selector: 'my-dashboard',
	templateUrl: 'templates/dashboard.component.html',
	styleUrls: ['styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
	projects: Project[] = [];
	
	constructor(
		private projectService: ProjectService,
	    private router: Router
	) {}
	
	ngOnInit(): void {
		this.projectService.getProjects()
			.then(heroes => this.projects = heroes.slice(1,5));
	}
	goToDetail(project: Project):void {
		let link = ['/detail', project.id]
		this.router.navigate(link)
	}
}