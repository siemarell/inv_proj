import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Project } from  './project';
import * as ol from 'openlayers';

@Component({
	selector: "olmap",
	template: `<div id="map" class="map" ></div>
    `
})
export class OlMap implements OnInit, OnChanges{
	@Input() projects: Project[];
	map: ol.Map;
	features: ol.Feature[] = [];
	featuresLayer: ol.layer.Vector;
	styles = {
		'route': new ol.style.Style({
			stroke: new ol.style.Stroke({
				width: 6, color: [237, 212, 0, 0.8]
			})
		}),
		'icon': new ol.style.Style({
			image: new ol.style.Icon({
				anchor: [0.5, 1],
				src: 'https://openlayers.org/en/v3.19.1/examples/data/icon.png'
			})
		}),
		'geoMarker': new ol.style.Style({
			image: new ol.style.Circle({
				radius: 7,
				snapToPixel: false,
				fill: new ol.style.Fill({color: 'black'}),
				stroke: new ol.style.Stroke({
					color: 'white', width: 2
				})
			})
		})
	};
	
	ngOnChanges(changes: SimpleChanges):void{
		if (changes['projects'] && !changes['projects'].isFirstChange()){
			//console.log(changes['projects'].currentValue);
			this.redrawFeatures();
		}
	}
	
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
		// console.log(this.projects);
		// console.log(this);
		// console.log(evt);
		this.map.removeLayer(this.featuresLayer);
	}
	
	redrawFeatures():void{
		//Remove old feature layer
		this.map.removeLayer(this.featuresLayer);
		
		//Map projects into ol.features
		var features: ol.Feature[] = this.projects
			.filter(project => {
				return project.coordinates!=undefined;
			})
			.map(project => {
				var feature = new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat(project.coordinates))
				});
				feature.setStyle(this.styles['icon']);
				return feature;
			});
		
		//Create new feature layer
		this.featuresLayer = new ol.layer.Vector({
			source: new ol.source.Vector({
				features: features
			})
		});
		
		//Add new feature layer
		this.map.addLayer(this.featuresLayer);
		//console.log(this.features)
	}
	
	centerOnProject(project: Project): void{
		this.map.setView(new ol.View({
			projection: 'EPSG:900913',
			center: ol.proj.fromLonLat(project.coordinates),
			zoom: 6
		}));
	}
}