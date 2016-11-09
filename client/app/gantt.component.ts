import {Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges} from '@angular/core';
import 'dhtmlxgantt';

@Component({
	selector: 'gantt',
	template: `<div id="gantt" style="height:350px; width:100%;"></div>`,
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css']
})
export class GanttComponent implements OnInit, OnChanges{
	
	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
		//gantt.setSizes();
	}
	
	ngOnInit(): void {
		//console.log(gantt);
		var tasks = {
			data:[
				{id:1, text:"Project #1",start_date:"01-04-2013", duration:11,
					progress: 0.6, open: true},
				{id:2, text:"Task #1",   start_date:"03-04-2013", duration:5,
					progress: 1,   open: true, parent:1},
				{id:3, text:"Task #2",   start_date:"02-04-2013", duration:7,
					progress: 0.5, open: true, parent:1},
				{id:4, text:"Task #2.1", start_date:"03-04-2013", duration:2,
					progress: 1,   open: true, parent:3},
				{id:5, text:"Task #2.2", start_date:"04-04-2013", duration:3,
					progress: 0.8, open: true, parent:3},
				{id:6, text:"Task #2.3", start_date:"05-04-2013", duration:4,
					progress: 0.2, open: true, parent:3}
			],
			links:[
				{id:1, source:1, target:2, type:"1"},
				{id:2, source:1, target:3, type:"1"},
				{id:3, source:3, target:4, type:"1"},
				{id:4, source:4, target:5, type:"0"},
				{id:5, source:5, target:6, type:"0"}
			]
		};
		gantt.config.readonly = true;
		gantt.init('gantt');
	//	gantt.setSizes();
		gantt.parse(tasks);
	}
}

