import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiclesComponent } from '../vehicles/modals/add-vehicles/add-vehicles.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
 
  {
    path: 'vehiculos',
    loadChildren: () =>
      import('@modules/vehicles/vehicles.module').then((m) => m.VehiclesModule),
  },
  {
    path: 'tipos_vehiculo',
    loadChildren: () =>
      import('@modules/vehicle-types/vehicle-types.module').then(
        (m) => m.VehicleTypesModule
      ),
  },
  {
    path: 'acceso',
    loadChildren: () =>
      import('@modules/access/access.module').then((m) => m.AccessModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
