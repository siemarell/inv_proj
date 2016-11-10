import { Component } from "@angular/core";

@Component({
	selector: 'detail-page-chart',
	template: `	<chart [options]="options" class="col-md-12"></chart>
`
})
export class HChartComponent {
	options: Object;
	constructor(){
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
                symbolRadius: 0
            },
			chart: {
				type: 'column'
			},
			xAxis: {
				categories: [2014,2015,2016, 2017],
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
			series: [{
                name: 'План',
				data: [16000, 17000, 13000, 37000],
                color: 'blue'
			},{
                name: 'Факт',
                data: [15000, 15000, 0, 0],
                color : 'green'
            }]
		};
	}
}