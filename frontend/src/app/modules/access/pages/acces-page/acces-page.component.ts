import { Component } from '@angular/core';

@Component({
  selector: 'app-acces-page',
  templateUrl: './acces-page.component.html',
  styleUrls: ['./acces-page.component.css']
})
export class AccesPageComponent {
  public showIncompleteAccess:boolean=true;
  optionSelecte:string='incomplete';
  changeOption() {
     (this.optionSelecte == 'incomplete') ?
      this.showIncompleteAccess = true:
      this.showIncompleteAccess = false;
    
  }
}
