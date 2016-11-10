import {Component, OnInit} from '@angular/core';
import {Project} from "./project";
import { ProjectsService } from './projects.service'
import { Router } from '@angular/router'

@Component({
    selector: 'my-heroes',
    templateUrl: 'templates/projects.component.html',
    styleUrls: ['styles/projects.component.css']
})
export class ProjectsComponent implements OnInit{
    
    projects: Project[];
    selectedProject: Project;
    
    constructor(
    	private projectsService: ProjectsService,
        private router: Router
    ){}
    
    ngOnInit(): void {
        this.getProjects();
    }
    
    getProjects(): void{
        this.projectsService.getProjects().then(projects => this.projects = projects);
    }
    
    onSelect(project: Project): void {
        this.selectedProject = project;
    }
    
    goToDetail(project: Project): void {
    	this.router.navigate(['detail', project.id])
    }
}

