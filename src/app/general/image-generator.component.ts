import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'bjjimage',
  template: '<img class="bjjimage" src="./assets/images/{{bjjImage}}">',
  styles: []
})
export class ImageGeneratorComponent implements OnInit {

  bjjImage: string;

  constructor() {}

   ngOnInit() {
     this.bjjImage =  "bjj-position-" + this.randomInFromInterval(1,16) + ".png"
   }

  randomInFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
