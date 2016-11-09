import {Component, OnInit} from '@angular/core';
import * as gantt from 'dhtmlxgantt';

//declare var Gantt: any;
@Component({
	selector: 'gantt',
	template: `<div id="gantt"></div>`
})
export class GanttComponent implements OnInit{
	//gantt = Gantt.getGanttInstance()
	
	
	ngOnInit(): void {
		console.log(gantt);
	}
}

