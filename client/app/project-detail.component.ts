import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: '/templates/project-detail.component.html',
	styleUrls: ['styles/project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit{
	project: Project;
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.projectsService.getProject(id).then(project => this.project = project)
		})
	}
	goBack(): void {
		this.location.back();
	}
	constructor(
		private projectsService: ProjectsService,
	    private route: ActivatedRoute,
	    private location: Location
	) {}
}
