import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router'

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
        // console.log(changes);
        // console.log(this.project);
    }

    ngOnInit(){}

    goBack(): void {
        this.location.back();
    }

    goToDetail(project: Project): void {
        this.router.navigate(['detail', this.project.id])
    }

    constructor(
        private projectsService: ProjectsService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}
}
