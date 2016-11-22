import {Component, OnInit} from '@angular/core';
import {Project} from "./project";
import { ProjectsService } from './projects.service'
import { ProjectSearchService } from './project-search.service'
import { Router } from '@angular/router'

@Component({
    selector: 'my-heroes',
    templateUrl: 'templates/projects.component.html',
    styleUrls: ['styles/projects.component.css']
})
export class ProjectsComponent implements OnInit{
    
    projects: Project[];
    selectedProject: Project;
    projectTypes: Promise<string[]>;
    selectedItem : string;
    get delayedProjects(): number {
        if (this.projects){
            return this.projects.filter(x => x.delayed).length
        }else{
            return 0;
        }
    };
    get normalProjects(): number {
        if (this.projects){
            return this.projects.filter(x => !x.delayed).length
        }else{
            return 0;
        }
    };
    
    constructor(
    	private projectsService: ProjectsService,
        private router: Router
    ){}
    
    ngOnInit(): void {
        this.getProjects();
        this.projectTypes = this.projectsService.getProjectTypes();//.then(typeOfProjects => {console.log(typeOfProjects);this.projectTypes = typeOfProjects});
        console.log(this.projectTypes);
    }

    onChange($event){
        this.selectedItem = $event.target.value;
        this.projectsService.getProjectByType(this.selectedItem)
            .then(projects => this.projects = projects);
    };
    
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

