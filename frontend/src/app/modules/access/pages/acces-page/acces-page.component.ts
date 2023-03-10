import { AccessService } from '@modules/access/services/access.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acces-page',
  templateUrl: './acces-page.component.html',
  styleUrls: ['./acces-page.component.css']
})
export class AccesPageComponent {
  public showIncompleteAccess:boolean=true;
  optionSelecte:string='incomplete';
  showDismissModal:boolean=false;
  showRecibModal:boolean=false;
  showResidentReportModal:boolean=false;
  constructor(private accessService:AccessService){

  }
  changeOption() {
     (this.optionSelecte == 'incomplete') ?
      this.showIncompleteAccess = true:
      this.showIncompleteAccess = false;
    
  }
  ngOnInit(){
    this.accessService.$showDismissModal
    .subscribe(response=>this.showDismissModal=response)

    this.accessService.$showRecibModal
    .subscribe(response=>this.showRecibModal=response)

    this.accessService.$showReportModal
    .subscribe(response=>this.showResidentReportModal=response)
  }
  showDismissAccessModal(){
    this.showDismissModal=true;
  }
  showRecibAccessModal(){
    this.showRecibModal=true;
  }

  showReportModal(){
    this.showResidentReportModal=true;
  }
}
