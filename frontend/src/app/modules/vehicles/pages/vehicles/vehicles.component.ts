import { Component, Input, ViewChild } from '@angular/core';
import { AddVehiclesComponent } from '@modules/vehicles/modals/add-vehicles/add-vehicles.component';
import { VehiclesService } from '@modules/vehicles/services/vehicles/vehicles.service';
import { VehicleModel } from 'src/app/core/models/vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:Array<VehicleModel>=[];
  addVehicleModal:boolean=false;
  editVehicleModal:boolean=false;
  constructor(private vehicleService:VehiclesService) { }

  ngOnInit(){
   
    this.vehicleService.getAllVehicles()
    .subscribe(response=>{
      console.log(response)
      this.vehicles=response
    })

    this.vehicleService.$addVehicleModal.subscribe(responde=>{
      this.addVehicleModal=responde;
    })
    this.vehicleService.$editVehicleModal.subscribe(responde=>{
      this.editVehicleModal=responde;
    })
    
  }
  

  showAddVehicleModal():void{
    this.addVehicleModal=true;
  }
  async showEditVehicleModal(vehicle:VehicleModel):Promise<any>{
    this.vehicleService.setVehicleSelected(vehicle);
    
    await this.vehicleService.$vehicleSelected.emit(vehicle)
    await this.vehicleService.$vehicleSelected.emit(vehicle)
    this.editVehicleModal=true;

  }
  receiveFromAddModal($event:any) {
   // this.showModalAdd = false
  }
  receiveFromEditModal($event:any) {
    //this.showModalEdit = false
  }
 
}
