import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  linksMenu: Array<any> = [
    { name: 'Accesos', router: ['/', 'acceso'] },
    { name: 'Vehiculos', router: ['/', 'vehiculos'] },
    { name: 'Tipos de Vehiculos', router: ['/', 'tipos_vehiculo'] },
    
  ];
}
