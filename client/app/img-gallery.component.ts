import {Component, ViewChild, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Project} from "./project";
//import { ModalDirective } from 'ng2-bootstrap';

@Component({
	selector: 'img-gallery',
	template: `
<div class="row" (click)="lgModal.show()">
	<div class="col-md-6" style="padding: 0px 7px 0px 0px; margin: 0px 0px 7px 0px">
		<img [src]="slides[0].image" style="height: 25%;width: 100%" *ngIf="slides[0]">
	</div>
	<div class="col-md-6" style="padding: 0px 0px 0px 7px; margin: 0px 0px 7px 0px">
		<img [src]="slides[1].image" style="height: 25%;width: 100%" *ngIf="slides[1]">
	</div>
</div>
 
<div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" (click)="lgModal.hide()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Отчет</h4>
      </div>
      <div class="modal-body">
		<div class="row">
		  <div class="col-md-12">
			<carousel [noWrap]="noWrapSlides">
			  <slide *ngFor="let slidez of slides; let index=index"
					 [active]="slidez.active">
				<img [src]="slidez.image" style="margin:auto;width: 100%" class="col-md-12">
			  </slide>
			</carousel>
		  </div>
		</div>
      </div>
    </div>
  </div>
</div>
`
	
})
export class ImageGallery implements OnChanges{
	@Input() project: Project;
	public myInterval:number = 5000;
	public noWrapSlides:boolean = false;
	public slides:Array<any> = [];
	//@ViewChild('lgModal') public childModal:any;
	public constructor() {
		//this.addSlide('../images/img-bottom-right.png');
		//this.addSlide('../images/img-top-right.png'[];);

	}


	ngOnChanges(changes: SimpleChanges): void {
		if (changes['project'] && !changes['project'].isFirstChange()){
			this.slides = [];
			if (this.project.hasOwnProperty('images')){
				this.slides = [];
				for (let image of this.project.images) {
					this.addSlide(image);
					console.log(image);
				}
			}
		}
	}

	public addSlide(url: string):void {
		let newWidth = 600 + this.slides.length + 1;
		this.slides.push({
			image: url,
			text: '',
			active: false
		});
	}
	
	public removeSlide(index:number):void {
		this.slides.splice(index, 1);
	}
	
	// public showImage(num):void {
	// 	// for (let i = 0; i < 4; i++){
	// 	// 	if (i==num){
	// 	// 		this.slides[i].active = false;
	// 	// 	}else {
	// 	// 		this.slides[i].active = false;
	// 	// 	}
	// 	// }
	// 	this.childModal.show()
	// }
}