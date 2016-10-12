import {Component, OnInit} from '@angular/core';
import {Project} from "./project";
import { ProjectService } from './project.service'
import { Router } from '@angular/router'

@Component({
    selector: 'my-heroes',
    templateUrl: 'templates/projects.component.html'
})
export class ProjectComponent implements OnInit{
    
    projects: Project[];
    selectedProject: Project;
    
    constructor(
    	private projectService: ProjectService,
        private router: Router
    ){}
    
    ngOnInit(): void {
        this.getProjects();
    }
    
    getProjects(): void{
        this.projectService.getProjects().then(projects => this.projects = projects);
    }
    
    onSelect(project: Project): void {
        this.selectedProject = project;
    }
    
    goToDetail(): void {
    	this.router.navigate(['detail', this.selectedProject.id])
    }
}

