import { Component, ViewChild } from "@angular/core";
//import { ModalDirective } from 'ng2-bootstrap';

@Component({
	selector: 'carousel-demo',
	template: `
<div class="row" >
  <div class="col-md-8">
    <carousel [noWrap]="noWrapSlides">
      <slide *ngFor="let slidez of slides; let index=index"
             [active]="slidez.active">
        <img [src]="slidez.image" style="margin:auto;width: 100%" (dblclick)="lgModal.show()">
      </slide>
    </carousel>
  </div>
</div>

<button class="btn btn-primary" (click)="lgModal.show()">Large modal</button>
 
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
        <img [src]="slidez.image" style="margin:auto;height: 80%;width: 100%">
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
export class CarouselDemoComponent {
	public myInterval:number = 5000;
	public noWrapSlides:boolean = false;
	public slides:Array<any> = [];
	//@ViewChild('lgModal') public childModal:any;
	public constructor() {
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}
	
	public addSlide():void {
		let newWidth = 600 + this.slides.length + 1;
		this.slides.push({
			image: `//placekitten.com/${newWidth}/300`,
			text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`,
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