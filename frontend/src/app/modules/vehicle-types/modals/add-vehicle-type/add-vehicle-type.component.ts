import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleTypesService } from '@modules/vehicle-types/services/vehicleTypes/vehicle-types.service';
import { SharedService } from '@shared/services/shared.service';
import { VehicleTypeModel } from 'src/app/core/models/vehicleType.model';

@Component({
  selector: 'app-add-vehicle-type',
  templateUrl: './add-vehicle-type.component.html',
  styleUrls: ['./add-vehicle-type.component.css']
})
export class AddVehicleTypeComponent {

  vehicleTypes: Array<VehicleTypeModel> = [];
  showInfoModal:boolean=false;
  formAddVehicleType:FormGroup=new FormGroup({});
  constructor(
    private vehicleTypesService: VehicleTypesService,
    
   
  ) {
    
  }

  ngOnInit() {
   
    this.formAddVehicleType=new FormGroup({
      vehicle_type:new FormControl('', [
        Validators.required,
        
      ]),
      price_per_minute:new FormControl('', [
        Validators.required,
      ])
    })
  }
  

  
 
  hideModal() {
   
    this.vehicleTypesService.$addVehicleTypeModal.emit(false);
  }
  addVehicleType() {
    const vehicle: any = this.formAddVehicleType.value;
    
   
    this.vehicleTypesService.addVehicleType(vehicle).subscribe(response=>{
      if(response!=undefined){
        this.showInfoModal=true;
      }
    })
    
  }
  
}


