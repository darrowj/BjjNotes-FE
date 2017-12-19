import { ActivatedRoute, Router } from '@angular/router';
import {Component} from "@angular/core";



@Component({
  templateUrl: './general-pages.component.html'
})

export class GeneralPagesComponent  {

  public location = '' ;

  constructor(private _router:Router) {

    this.location = _router.url;

  }





}
