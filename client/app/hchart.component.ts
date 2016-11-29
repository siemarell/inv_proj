import { Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges } from "@angular/core";
import {HighchartsData} from './highcharts-data';
import {ProjectsService} from "./projects.service";
import { ActivatedRoute, Params} from '@angular/router';

@Component({
	selector: 'detail-page-chart',
	template: `	<chart [options]="options" class="col-md-12" style="height: 100%;"></chart>`
})
export class HChartComponent implements OnInit{
	options: Object;
    hData: HighchartsData[];



	constructor(
        private projectsService: ProjectsService,
        private route: ActivatedRoute
    ){};

    ngOnInit():void{
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.projectsService.getHighchartsData(id).then(hData => {
                console.log(hData);
                this.initializeHighcharts(hData);
            });
        });
    };

    initializeHighcharts(hData):void{
        console.log(hData);
        this.options = {
            title : {
                text : 'Финансирование, млн. руб',
                align: 'left',
                style:{
                    fontFamily: 'sans-serif',
                    fontSize: '20px',
                    fontWeight: 'bold',
                }
            },
            credits: {
                enabled: false
            },
            legend:{
                align: 'left',
                verticalAlign: 'top',
                itemMarginTop: 30,
                itemMarginBottom: 10,
                x: 100,
                symbolRadius: 0,
                itemStyle:{
                    fontSize: '20px'
                }
            },
            chart: {
                type: 'column'
            },
            xAxis: {
                categories: hData.categories,
                labels: {
                    style:{
                        fontSize: '20px'
                    }
                }
            },
            yAxis: {
                labels:{
                    format: '{value}',
                    style:{
                        fontSize: '20px'
                    }
                },
                title:{
                    text: ''
                }
            },
            series: hData.series
        };
    };

}


