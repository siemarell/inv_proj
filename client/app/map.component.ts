import {Component, OnInit} from '@angular/core';
import * as ol from 'openlayers';

@Component({
	selector: "olmap",
	template: `<div id="map" class="map" ></div>
    `
})
export class OlMap implements OnInit{
	ol: any;

	ngOnInit():void{
		var map = new ol.Map({
			
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
	}
}