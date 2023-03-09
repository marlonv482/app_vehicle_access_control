import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddVehiclesComponent } from './modals/add-vehicles/add-vehicles.component';
import { EditVehiclesComponent } from './modals/edit-vehicles/edit-vehicles.component';
import { InfoModalComponent } from '@shared/modals/info-modal/info-modal.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AddVehiclesComponent,
    EditVehiclesComponent,
    VehiclesComponent,
    
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class VehiclesModule { }
