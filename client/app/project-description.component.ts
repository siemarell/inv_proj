import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
    selector: 'project-description',
    templateUrl: '/templates/project-description.component.html',
    styleUrls: ['styles/project-description.component.css']
})
export class ProjectDescriptionComponent implements OnInit, OnChanges{
    @Input() project: Project;


    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        console.log(this.project);
    }

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
