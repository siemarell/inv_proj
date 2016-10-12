import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: '/templates/hero-detail.component.html',
	styleUrls: ['styles/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
	project: Project;
	
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.projectService.getProject(id).then(project => this.project = project)
		})
	}
	goBack(): void {
		this.location.back();
	}
	constructor(
		private projectService: ProjectService,
	    private route: ActivatedRoute,
	    private location: Location
	) {}
}
