import {Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation, EventEmitter} from '@angular/core';
import { Project } from  './project';
import * as ol from 'openlayers';
import {isUndefined} from "util";

@Component({
	selector: "olmap",
	styleUrls: ['node_modules/openlayers/css/ol.css','styles/map.css'],
	encapsulation: ViewEncapsulation.None,
	template: `<div id="map" class="map" ></div>
    `
})
export class OlMap implements OnInit, OnChanges{
	@Input()
	set selectedProject(value: Project) {
		if (value){
			this._selectedProject = value;
			this.centerOnProject(value);
			console.log(value);
		}
	}
	@Input()
	set projects(value: Project[]) {
		if (value && value[0]!=undefined){
			this._projects = value;
			this.redrawFeatures();
			this.extentToFeatures();
		}
	}
	private _projects: Project[];
	private _selectedProject: Project;
	map: ol.Map;
	extentControl = new ExtentControl();
	features: ol.Feature[] = [];
	featuresLayer: ol.layer.Vector;
	
	ngOnChanges(changes: SimpleChanges):void{
		// if (changes['_projects'] && !changes['_projects'].isFirstChange()){
		// 	//console.log(changes['projects'].currentValue);
		// 	this.redrawFeatures();
		// 	this.extentToFeatures();
		// }
		// if (changes['_selectedProject'] && !changes['_selectedProject'].isFirstChange()){
		// 	//console.log(changes);
		// 	this.centerOnProject(changes['_selectedProject'].currentValue);
		// }
	}
	
	ngOnInit():void{
		//Initialize map
		this.map = new ol.Map({
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
				})
			],
			controls: ol.control.defaults().extend([this.extentControl]),
			target: 'map',
			view: new ol.View({
				projection: 'EPSG:900913',
				center: ol.proj.fromLonLat([37.7558, 55.6173]),
				zoom: 6
			})
		});
		
		//Subscribe to events
		this.map.on('click', this.onMapClick.bind(this));
		this.extentControl.on('click', this.extentToFeatures.bind(this));
	}
	
	onMapClick(evt): void{
		// console.log(this.projects);
		// console.log(this);
		// console.log(evt);
		//this.map.removeLayer(this.featuresLayer);
		//this.centerOnProject(this.projects[0]);
	}
	
	private redrawFeatures():void{
		//Remove old feature layer
		this.map.removeLayer(this.featuresLayer);
		
		//Map projects into ol.features
		var features: ol.Feature[] = this._projects
			.filter(project => {
				return project.coordinates!=undefined;
			})
			.map(project => {
				var feature = new ol.Feature({
					geometry: new ol.geom.Point(ol.proj.fromLonLat(project.coordinates))
				});
				var style;
				if (project.type == 'Недра'){
					style = Styles.getStyle('mining');
				}else {
					style = Styles.getStyle('agro');
				}
				feature.setStyle(style);
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
		//Extent
		//this.extentToFeatures();
		//this.map.getView().fit(this.featuresLayer.getExtent(), this.map.getSize());
		//console.log(this.features)
	}
	
	private extentToFeatures():void{
		switch (this._projects.length){
			case 0:
				break;
			case 1:
				this.centerOnProject(this._projects[0]);
				break;
			default:
				var extent = ol.extent.createEmpty();
				ol.extent.extend(extent, this.featuresLayer.getSource().getExtent());
				this.map.getView().fit(extent, this.map.getSize());
		}
	
	}
	
	private centerOnProject(project: Project): void{
		if (!project.hasOwnProperty('coordinates')){
			console.log('project has no coordinates');
			return;
		}
		this.map.setView(new ol.View({
			projection: 'EPSG:900913',
			center: ol.proj.fromLonLat(project.coordinates),
			zoom: 9
		}));
	}
}


class Styles {
	private static styles: {[index: string]: ol.style.Style} = {
		'mining': new ol.style.Style({
			image: new ol.style.Icon({
				anchor: [0.5, 1],
				src: '../images/icons/mining.png'
			})
		}),
		'agro': new ol.style.Style({
			image: new ol.style.Icon({
				anchor: [0.5, 1],
				src: '../images/icons/agro.png'
			})
		})
	};
	
	static getStyle(name: string): ol.style.Style{
		return this.styles[name];
	}
}

class ExtentControl extends ol.control.Control{
	constructor(){
		var button = document.createElement('button');
		button.innerHTML = 'C';
		var element = document.createElement('div');
		element.className = 'rotate-north ol-unselectable ol-control';
		element.appendChild(button);
		super({element:element});
		button.addEventListener('click', this.onClick.bind(this))
	}
	
	onClick(): void {
	 	this.dispatchEvent('click')
	}
}