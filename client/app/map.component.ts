import {Component, OnInit, Input} from '@angular/core';
import { Project } from  './project';
import * as ol from 'openlayers';

@Component({
	selector: "olmap",
	template: `<div id="map" class="map" ></div>
    `
})
export class OlMap implements OnInit{
	@Input() projects: Project[];
	map: ol.Map;
	features: ol.Feature[];
	
	ngOnInit():void{
		this.map = new ol.Map({
			
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
				})
			],
			target: 'map',
			view: new ol.View({
				projection: 'EPSG:900913',
				center: ol.proj.fromLonLat([37.7558, 55.6173]),
				zoom: 6
			})
		});
		this.map.on('click', this.onMapClick.bind(this));
	}
	
	onMapClick(evt): void{
		console.log(this.projects);
		console.log(this);
		console.log(evt);
	}
}