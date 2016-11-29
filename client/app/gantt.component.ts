import {Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges} from '@angular/core';
import 'dhtmlxgantt';
import 'dhtmlxgantt_marker'
import {ProjectsService} from "./projects.service";
import {Task} from "./task";
import {Router} from "@angular/router";
import { ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'gantt',
	template: `<div id="gantt" class="col-md-12" style="height: 100%; width: 100%; margin: 0px 0px 0px 0px; padding: 0px"></div>`,
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['node_modules/dhtmlx-gantt/codebase/dhtmlxgantt.css', 'styles/gantt.component.css' ]
})
export class GanttComponent implements OnInit, OnChanges{

    tasks : Task[];

    constructor(
        private projectsService: ProjectsService,
        private route: ActivatedRoute
    ){}

	ngOnChanges(changes: SimpleChanges): void {
		//console.log(changes);
		//gantt.setSizes();
	}

	
	ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.projectsService.getTasks(id).then(tasks => {
                //console.log(tasks);
                this.createGantt(tasks);
            });
        });


		// var tasks = {
		// 	data:[
		// 		{id:1, text:"Подготовительные работы",start_date:"01-04-2013", duration:11,
		// 			progress: 0.6, open: true},
		// 		{id:2, text:"Монтаж металлоконструкций",   start_date:"03-04-2013", duration:5,
		// 			progress: 1,   open: true, parent:1},
		// 		{id:3, text:"Устройство монолитных перекрытий",   start_date:"02-04-2013", duration:7,
		// 			progress: 0.5, open: true, parent:1},
		// 		{id:4, text:"Устройство ограждающих", start_date:"03-04-2013", duration:2,
		// 			progress: 1,   open: true},
		// 		{id:5, text:"Водоснабжение, канализация", start_date:"04-04-2013", duration:3,
		// 			progress: 0.8, open: true},
		// 		{id:6, text:"Отопление", start_date:"05-04-2013", duration:4,
		// 			progress: 0.2, open: true}
		// 	],
		// 	links:[
		// 		// {id:1, source:1, target:2, type:"1"},
		// 		// {id:2, source:1, target:3, type:"1"},
		// 		// {id:3, source:3, target:4, type:"1"},
		// 		// {id:4, source:4, target:5, type:"0"},
		// 		// {id:5, source:5, target:6, type:"0"}
		// 	]
		// };


	}

	createGantt(tasks): void{

        gantt.config.columns = [
            {
                name: "progress",
                label: "ЗАДАЧА",
                width : 70,
                template : function(item){
                    if (item >= 1){
                        return "Закончен"
                    };
                    if (item == 0){
                        return 'Не начат'
                    }
                    return Math.round(item.progress * 100) + "%";
                }
            },
            {
                name : "text",
                label : " ",
                tree : false,
                width : '*',
                align : "center"
            }
        ];

        var date_to_str = gantt.date.date_to_str(gantt.config.task_date);
        var today = new Date();
        //var today = new Date();
        console.log(today);
        gantt.addMarker({
            start_date: today,
            css: "today",
            text: "Сегодня",
            title:"Сегодня: "+ date_to_str(today)
        });

        gantt.config.scale_unit = "month";
        gantt.config.date_scale = "%d.%m";
        gantt.config.show_progress = true;

        gantt.templates.task_text = function (start, end, task) {
            return '';
        };

        gantt.config.readonly = true;
        gantt.init('gantt');
        gantt.parse(tasks);
    };
}

