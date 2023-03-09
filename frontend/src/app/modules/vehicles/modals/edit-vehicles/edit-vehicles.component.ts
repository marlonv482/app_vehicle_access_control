import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehiclesService } from '@modules/vehicles/services/vehicles/vehicles.service';
import { VehicleModel } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-edit-vehicles',
  templateUrl: './edit-vehicles.component.html',
  styleUrls: ['./edit-vehicles.component.css']
})
export class EditVehiclesComponent {
  statusOptions:Array<any>=[
    {status:'Activo',value:1,selected:false},
    {status:'Inactivo',value:2,selected:false}
  ];
  constructor(private vehicleService:VehiclesService) {
    this.vehicleSelected=this.vehicleService.getVehicleSelected();
    (this.vehicleSelected.status)?this.statusOptions[0].selected=true:this.statusOptions[1].selected=true;
    
   }
   vehicleSelected!:VehicleModel;
   ngOnInit(){
    
   
   }
  
  
 
  hideModal(){
    this.vehicleService.$editVehicleModal.emit(false);
  }
}
