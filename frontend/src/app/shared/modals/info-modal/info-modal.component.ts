import { VehiclesService } from '@modules/vehicles/services/vehicles/vehicles.service';
import { Component } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent {

hideModal() {
 
  location.reload();

}
}
