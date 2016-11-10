import { Component } from "@angular/core";

@Component({
	selector: 'carousel-demo',
	template: `
<div class="row">
  <div class="col-md-4">
    <carousel [noWrap]="noWrapSlides">
      <slide *ngFor="let slidez of slides; let index=index"
             [active]="slidez.active">
        <img [src]="slidez.image" style="margin:auto;">
      </slide>
    </carousel>
  </div>
</div>
`
})
export class CarouselComponent {
	public myInterval:number = 5000;
	public noWrapSlides:boolean = true;
	public slides:Array<any> = [];
	
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
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
		});
	}
	
	public removeSlide(index:number):void {
		this.slides.splice(index, 1);
	}
}