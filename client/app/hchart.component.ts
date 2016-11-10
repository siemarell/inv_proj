import { Component } from "@angular/core";

@Component({
	selector: 'detail-page-chart',
	template: `
			<chart [options]="options"></chart>
`
})
export class HChartComponent {
	options: Object;
	constructor(){
		this.options = {
			title : { text : 'Финансирование, млн. руб' },
			credits: {
				enabled: false
			},
			chart: {
				type: 'column'
			},
			xAxis: {
				categories: [2014,2015,2016]
			},
			series: [{
				data: [15000, 17000],
			}]
		};
	}
}