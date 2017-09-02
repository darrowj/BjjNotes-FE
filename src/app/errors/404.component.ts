import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">These are not the droids you are looking for...<br /> 404</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:77px; 
      font-size: 77px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }

}
