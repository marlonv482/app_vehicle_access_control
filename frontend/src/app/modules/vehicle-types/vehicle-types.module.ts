import { SharedModule } from '@shared/shared.module';
import { VehicleTypesComponent } from './pages/vehicle-types/vehicle-types.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleTypesRoutingModule } from './vehicle-types-routing.module';
import { AddVehicleTypeComponent } from './modals/add-vehicle-type/add-vehicle-type.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VehicleTypesComponent,
    AddVehicleTypeComponent
  ],
  imports: [
    CommonModule,
    VehicleTypesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VehicleTypesModule { }
