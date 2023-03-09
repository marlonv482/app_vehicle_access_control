import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-types',
  templateUrl: './vehicle-types.component.html',
  styleUrls: ['./vehicle-types.component.css']
})
export class VehicleTypesComponent {
  vehicleTypes:Array<any>=[
    {
    vehicleType:"Residente",
    price:0.05,
  },
  {
    vehicleType:"Oficial",
    price:0,
    
  },{
    vehicleType:"Externo",
    price:0.5,
    
  }]
}
