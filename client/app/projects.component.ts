import {Component, OnInit} from '@angular/core';
import {Project} from "./project";
import { ProjectsService } from './projects.service';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/primeng';

@Component({
    selector: 'my-projects',
    templateUrl: 'templates/projects.component.html',
    styleUrls: ['styles/projects.component.css']
})
export class ProjectsComponent implements OnInit{
    
    projects: Project[];
    selectedProject: Project;
    projectTypes : SelectItem[];
    selectedType: string;
    //projectTypes: Promise<string[]>;
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
    ){
        this.projectTypes = [];

    }
    
    ngOnInit(): void {
        this.getProjects();
        this.projectTypes.push({label: 'все типы', value: 'все типы'});
        this.projectsService.getProjectTypes()
            .then(typesOfProjects => {
                    typesOfProjects.forEach(typeOfProjects => this.projectTypes.push({label: typeOfProjects, value: typeOfProjects}))
                });
        //console.log(this.projectTypes);
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

