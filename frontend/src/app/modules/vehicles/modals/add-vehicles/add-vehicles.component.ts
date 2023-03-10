import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehiclesService } from '@modules/vehicles/services/vehicles/vehicles.service';
import { VehicleTypesService } from '@modules/vehicle-types/services/vehicleTypes/vehicle-types.service';
import { Observable } from 'rxjs';
import { VehicleModel } from 'src/app/core/models/vehicle.model';
import { VehicleTypeModel } from 'src/app/core/models/vehicleType.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-add-vehicles',
  templateUrl: './add-vehicles.component.html',
  styleUrls: ['./add-vehicles.component.css'],
})
export class AddVehiclesComponent {
  vehicleTypes: Array<VehicleTypeModel> = [];
  showInfoModal: boolean = false;
  formAddVehicle: FormGroup = new FormGroup({});
  constructor(
    private vehicleTypesService: VehicleTypesService,
    private vehicleService: VehiclesService,
    
  ) {}

  ngOnInit() {
    this.loadVehicleTypes();
    this.formAddVehicle = new FormGroup({
      plate: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      vehicleType: new FormControl(2, [Validators.required]),
    });
  }
  loadVehicleTypes() {
    this.vehicleTypesService.getAllVehicleTypes().subscribe((response) => {
      response.forEach((vehicleType: VehicleTypeModel) => {
        if (vehicleType.vehicle_type != 'No Residente') {
          this.vehicleTypes.push(vehicleType);
        }
      });
    });
  }

  show() {}
  hideModal() {
    this.vehicleService.$addVehicleModal.emit(false);
  }
  addVehicle() {
    const vehicle: any = this.formAddVehicle.value;

    this.vehicleService.addVehicle(vehicle).subscribe((response) => {
      if (response != undefined) {
        this.showInfoModal = true;
      }
    });
  }
}
