import { Injectable } from '@angular/core';
import {Project} from "./project";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Task} from "./task";
import {HighchartsData} from './highcharts-data';

@Injectable()
export class ProjectsService {
	private projectsUrl = 'api/projects';
	
	constructor(private http: Http){}
	
	getProjects(): Promise<Project[]>{
		  return this.http.get(this.projectsUrl)
			  .toPromise()
			  .then(response => response.json() as Project[])
			  .catch(this.handleError);
	}
	
	getProject(id: number): Promise<Project> {
		return this.getProjects().then(projects => projects.find(project => project.id === id))
	}

	getTasks(projectId : number): Promise<Task[]>{
		return this.http.get(this.projectsUrl + "/" + projectId +"/gantt")
			.toPromise()
			.then(response => response.json() as Task[])
			.catch(this.handleError);
	}

	getProjectTypes(): Promise<string[]>{
		return this.http.get(this.projectsUrl + "/types")
			.toPromise()
			.then(response => response.json() as string[])
			.catch(this.handleError);
	}

	getProjectByType(pojectType : string): Promise<Project[]>{
		return this.http.get(this.projectsUrl + '/types/' + pojectType)
			.toPromise()
			.then(response => response.json() as Project[])
			.catch(this.handleError);
	}

	getHighchartsData(projectId : number): Promise<HighchartsData[]>{
		return this.http.get(this.projectsUrl + "/" + projectId + "/hchart")
			.toPromise()
			.then(response => response.json() as HighchartsData[])
			.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}