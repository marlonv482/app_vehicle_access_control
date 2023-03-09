import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleTypesComponent } from './pages/vehicle-types/vehicle-types.component';

const routes: Routes = [{ path: '', component: VehicleTypesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleTypesRoutingModule { }
