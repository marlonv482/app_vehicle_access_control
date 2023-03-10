import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  linksMenu: Array<any> = [
    { name: 'Accesos', router: ['/', 'acceso'] ,description:'Modulo de Accesos'},
    { name: 'Vehiculos', router: ['/', 'vehiculos'] ,description:'Modulo de Vehiculos'},
    { name: 'Tipos de Vehiculos', router: ['/', 'tipos_vehiculo'],description:'Modulo de Tipos de Vehiculos' },
    
  ];
}
