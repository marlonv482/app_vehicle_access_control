import { AccessService } from './../../services/access.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-access-modal',
  templateUrl: './info-access-modal.component.html',
  styleUrls: ['./info-access-modal.component.css']
})
export class InfoAccessModalComponent {
  recibo:any={};
  constructor(private accessService:AccessService){
   this.recibo=this.accessService.getRecibo();
  }
  hideModal() {
 
    location.reload();
  
  }
}
