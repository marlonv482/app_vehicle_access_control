import { Component } from '@angular/core';
import { VehicleTypesService } from '@modules/vehicle-types/services/vehicleTypes/vehicle-types.service';

@Component({
  selector: 'app-vehicle-types',
  templateUrl: './vehicle-types.component.html',
  styleUrls: ['./vehicle-types.component.css']
})
export class VehicleTypesComponent {
  vehicleTypes:Array<any>=[
   ]
   addVehicleTypeModal:boolean=false;
   constructor(private vehicleTypeService:VehicleTypesService){

   }
   ngOnInit(){
    this.vehicleTypeService.getAllVehicleTypes()
    .subscribe(response=>{
      this.vehicleTypes=response
    })
    this.vehicleTypeService.$addVehicleTypeModal
    .subscribe(response=>{
      this.addVehicleTypeModal=response;
    })

    this.vehicleTypeService.$addVehicleTypeModal.subscribe(responde=>{
      this.addVehicleTypeModal=responde;
    })
   }
   showAddVehicleTypeModal(){
    this.addVehicleTypeModal=true;
   }

}
