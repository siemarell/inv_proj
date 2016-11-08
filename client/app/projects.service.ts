import { Injectable } from '@angular/core';
import {Project} from "./project";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectsService {
	private projectsUrl = 'api/projects';
	
	constructor(private http: Http){}
	
	getProjects(): Promise<Project[]>{
		  return this.http.get(this.projectsUrl)
			  .toPromise()
			  .then(response => response.json().projects as Project[])
			  .catch(this.handleError);
	}
	
	getProject(id: number): Promise<Project> {
		return this.getProjects().then(projects => projects.find(project => project.id === id))
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}