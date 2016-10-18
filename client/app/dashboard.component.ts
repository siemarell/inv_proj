import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProjectsService} from "./projects.service";
import {Project} from "./project";
@Component({
	selector: 'my-dashboard',
	templateUrl: 'templates/dashboard.component.html',
	styleUrls: ['styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
	projects: Project[] = [];
	
	constructor(
		private projectService: ProjectsService,
	    private router: Router
	) {}
	
	ngOnInit(): void {
		this.projectService.getProjects()
			.then(projects => this.projects = projects);
	}
	goToDetail(project: Project):void {
		let link = ['/detail', project.id]
		this.router.navigate(link)
	}
}